import { monaco, themeName } from './monaco.js';
import * as rt from './runtime.js';
import { store, modelOf } from './files.js';
import { mountExplorer } from './explorer.js';

const KEY = 'py-ide:nb1';
const DEF = [
  { type: 'md', src: '# 我的筆記本\n雙擊文字儲存格可編輯。**Shift+Enter** 執行並跳到下一格，變數會在儲存格之間保留。' },
  { type: 'code', src: 'import math\nx = 10\nmath.sqrt(x)' },
  { type: 'code', src: '# 最後一行的值會自動顯示\nx * 2' },
];
const esc = (s) => s.replace(/[&<>]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m]));
function md(src) {
  const h = esc(src)
    .replace(/```\w*\n([\s\S]*?)```/g, '<pre>$1</pre>')
    .replace(/^(#{1,4}) (.+)$/gm, (_, a, t) => `<h${a.length}>${t}</h${a.length}>`)
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/^[-*] (.+)$/gm, '<li>$1</li>').replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`);
  return h.split(/\n{2,}/).map((p) => (/^<(h\d|ul|pre)/.test(p) ? p : `<p>${p.replace(/\n/g, '<br>')}</p>`)).join('');
}

export function mountNotebook(root) {
  let cells;
  try { cells = JSON.parse(localStorage.getItem(KEY)) || DEF; } catch { cells = DEF; }
  let n = 0, eds = [], queue = Promise.resolve();
  const save = () => localStorage.setItem(KEY, JSON.stringify(cells.map(({ type, src }) => ({ type, src }))));
  root.innerHTML = `
    <aside class="side" id="n-side"></aside><div class="nb-main">
    <div class="nb-bar">
      <button data-a="code">＋ 程式碼</button><button data-a="md">＋ 文字</button>
      <button data-a="all">全部執行</button><button data-a="restart">重新啟動執行階段</button>
      <button data-a="clear">清除輸出</button><button data-a="ipynb">下載 .ipynb</button>
      <span id="n-st" class="dim">正在連線至 Python…</span>
    </div>
    <div id="n-cells"></div></div>
    <section class="nb-file" hidden><div class="fh"><span class="fn"></span><span class="dim">貼上或輸入內容會自動儲存</span><button class="fx" title="關閉">✕</button></div><div class="fed"></div></section>`;
  const box = root.querySelector('#n-cells'), st = root.querySelector('#n-st');
  const elOf = (c) => box.children[cells.indexOf(c)];
  const addOut = (el, t, cls) => {
    const s = document.createElement('span');
    if (cls) s.className = cls;
    s.textContent = t; el.querySelector('.co').appendChild(s);
  };

  function render() {
    eds.forEach((e) => e.dispose()); eds = []; box.innerHTML = '';
    cells.forEach((c, i) => {
      const el = document.createElement('div');
      el.className = 'cell ' + c.type;
      el.innerHTML = `<div class="gut"><button class="go" title="執行 (Ctrl+Enter)">▶</button><small class="cnt">${c.count ? `[${c.count}]` : ''}</small></div>
        <div class="body"><div class="tools"><button data-a="up">↑</button><button data-a="down">↓</button>
        <button data-a="type">${c.type === 'code' ? '轉成文字' : '轉成程式碼'}</button><button data-a="del">刪除</button></div>
        <div class="ed"></div><div class="mdv"></div><pre class="co log"></pre></div>`;
      box.appendChild(el);
      const edEl = el.querySelector('.ed'), view = el.querySelector('.mdv');
      const ed = monaco.editor.create(edEl, {
        value: c.src, language: c.type === 'code' ? 'python' : 'markdown', theme: themeName(),
        minimap: { enabled: false }, lineNumbers: 'off', glyphMargin: false, folding: false,
        lineDecorationsWidth: 8, scrollBeyondLastLine: false, renderLineHighlight: 'none',
        overviewRulerLanes: 0, hideCursorInOverviewRuler: true, wordWrap: 'on',
        scrollbar: { vertical: 'hidden', alwaysConsumeMouseWheel: false }, fontSize: 14, tabSize: 4,
      });
      const fit = () => { edEl.style.height = Math.max(44, ed.getContentHeight()) + 'px'; ed.layout(); };
      ed.onDidContentSizeChange(fit); fit();
      ed.onDidChangeModelContent(() => { c.src = ed.getValue(); save(); });
      ed.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => runCell(c));
      ed.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, async () => {
        await runCell(c);
        const j = cells.indexOf(c);
        if (j === cells.length - 1) { cells.push({ type: 'code', src: '' }); save(); render(); }
        eds[j + 1]?.focus();
      });
      eds.push(ed);
      const showMd = c.type === 'md' && !c.editing;
      edEl.hidden = showMd; view.hidden = !showMd;
      if (showMd) {
        view.innerHTML = c.src.trim() ? md(c.src) : '<p class="dim">（空白文字儲存格，雙擊編輯）</p>';
        view.ondblclick = () => { c.editing = true; render(); eds[cells.indexOf(c)].focus(); };
      }
      (c.log || []).forEach(([t, cls]) => addOut(el, t, cls));
      el.querySelector('.go').onclick = () => runCell(c);
      el.querySelector('.tools').onclick = (e) => {
        const a = e.target.dataset.a; if (!a) return;
        const j = cells.indexOf(c);
        if (a === 'del') cells.splice(j, 1);
        if (a === 'up' && j > 0) [cells[j - 1], cells[j]] = [cells[j], cells[j - 1]];
        if (a === 'down' && j < cells.length - 1) [cells[j + 1], cells[j]] = [cells[j], cells[j + 1]];
        if (a === 'type') { c.type = c.type === 'code' ? 'md' : 'code'; c.editing = false; c.log = []; }
        save(); render();
      };
    });
  }

  function runCell(c) {
    if (c.type === 'md') { c.editing = false; render(); return Promise.resolve(); }
    return (queue = queue.then(async () => {
      const el = elOf(c); if (!el) return;
      c.log = []; el.querySelector('.co').textContent = '';
      el.classList.add('busy'); el.querySelector('.cnt').textContent = '[*]';
      const put = (t, cls) => { c.log.push([t, cls]); const e = elOf(c); if (e) addOut(e, t, cls); };
      await rt.runCell(c.src, { out: put, err: (t) => put(t, 'err') });
      c.count = ++n;
      const e = elOf(c);
      if (e) { e.classList.remove('busy'); e.querySelector('.cnt').textContent = `[${c.count}]`; }
    }));
  }

  root.querySelector('.nb-bar').onclick = async (e) => {
    const a = e.target.dataset.a; if (!a) return;
    if (a === 'code' || a === 'md') { cells.push({ type: a, src: '' }); save(); render(); eds.at(-1).focus(); }
    if (a === 'all') for (const c of cells.slice()) await runCell(c);
    if (a === 'restart') { rt.reset(); n = 0; cells.forEach((c) => { c.count = 0; c.log = []; }); render(); }
    if (a === 'clear') { cells.forEach((c) => (c.log = [])); render(); }
    if (a === 'ipynb') {
      const nb = {
        cells: cells.map((c) => ({
          cell_type: c.type === 'code' ? 'code' : 'markdown', metadata: {}, source: c.src.split(/(?<=\n)/),
          ...(c.type === 'code' ? { outputs: [], execution_count: null } : {}),
        })),
        metadata: { kernelspec: { name: 'python3', display_name: 'Python 3', language: 'python' }, language_info: { name: 'python' } },
        nbformat: 4, nbformat_minor: 4,
      };
      const l = document.createElement('a');
      l.href = URL.createObjectURL(new Blob([JSON.stringify(nb, null, 1)], { type: 'application/json' }));
      l.download = 'notebook.ipynb'; l.click(); URL.revokeObjectURL(l.href);
    }
  };

  // 左側檔案總管 + 右側檔案編輯器：這些檔案都能被儲存格用 open() 讀取
  const panel = root.querySelector('.nb-file'); let fed = null, cur = null;
  const explorer = mountExplorer(root.querySelector('#n-side'), { onOpen: showFile, isActive: (n) => n === cur });
  function showFile(n) {
    cur = n; panel.hidden = false; panel.querySelector('.fn').textContent = n;
    fed ??= monaco.editor.create(panel.querySelector('.fed'), { theme: themeName(), automaticLayout: true, minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false, tabSize: 4 });
    fed.setModel(modelOf(n)); explorer.mark();
  }
  panel.querySelector('.fx').onclick = () => { cur = null; panel.hidden = true; explorer.mark(); };
  store.on((e) => {
    if (e.name !== cur) return;
    if (e.type === 'remove') { cur = null; panel.hidden = true; explorer.mark(); }
    if (e.type === 'rename') showFile(e.to);
  });

  render();
  rt.ready.then(() => (st.textContent = '已連線 · Python 3 (Pyodide)'));
}
