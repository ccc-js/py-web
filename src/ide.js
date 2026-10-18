import { monaco, themeName } from './monaco.js';
import * as rt from './runtime.js';
import { store, modelOf } from './files.js';
import { mountExplorer } from './explorer.js';

export function mountIDE(root) {
  const st = store.state;
  root.innerHTML = `
    <nav class="act"><button class="on" title="檔案總管">📁</button></nav>
    <aside class="side" id="v-side"></aside>
    <section class="v-main">
      <div class="tabrow"><div id="v-tabs" class="tabs"></div><button class="run" id="v-run">▶ 執行 (Ctrl+Enter)</button></div>
      <div id="v-ed"></div>
      <div class="panel">
        <div class="ptabs"><button data-p="out" class="on">輸出</button><button data-p="term">終端機</button><button id="v-clr" class="r">清除</button></div>
        <pre id="v-out" class="log"></pre>
        <div id="v-term" hidden><pre id="v-log" class="log"></pre><label class="prompt">&gt;&gt;&gt;<input id="v-in" spellcheck="false" autocomplete="off"></label></div>
      </div>
    </section>
    <footer class="status"><span id="v-st">正在載入 Python…</span><span id="v-pos"></span><span>Python 3 (Pyodide)</span></footer>`;
  const $ = (s) => root.querySelector(s);
  const out = $('#v-out'), log = $('#v-log'), runBtn = $('#v-run');
  mountExplorer($('#v-side'), { onOpen: (n) => store.open(n), isActive: (n) => n === st.active });

  const editor = monaco.editor.create($('#v-ed'), {
    theme: themeName(), automaticLayout: true, fontSize: 14, minimap: { enabled: true },
    tabSize: 4, insertSpaces: true, scrollBeyondLastLine: false,
  });
  function renderTabs() {
    const tabs = $('#v-tabs'); tabs.innerHTML = '';
    for (const n of st.open) {
      const t = document.createElement('div');
      t.className = 'tab' + (n === st.active ? ' on' : '');
      t.innerHTML = '<span></span><button class="x" title="關閉">✕</button>';
      t.firstChild.textContent = n;
      t.onclick = () => store.open(n);
      t.lastChild.onclick = (e) => { e.stopPropagation(); store.close(n); };
      tabs.appendChild(t);
    }
  }
  function show() { editor.setModel(st.active ? modelOf(st.active) : null); renderTabs(); }
  store.on(show); show();
  editor.onDidChangeCursorPosition((e) => ($('#v-pos').textContent = `行 ${e.position.lineNumber}，欄 ${e.position.column}`));

  const append = (el, t, c) => {
    const s = document.createElement('span');
    if (c) s.className = c;
    s.textContent = t; el.appendChild(s); el.scrollTop = el.scrollHeight;
  };
  const showPanel = (p) => {
    root.querySelectorAll('.ptabs [data-p]').forEach((b) => b.classList.toggle('on', b.dataset.p === p));
    out.hidden = p !== 'out'; $('#v-term').hidden = p !== 'term';
  };
  root.querySelectorAll('.ptabs [data-p]').forEach((b) => (b.onclick = () => showPanel(b.dataset.p)));
  $('#v-clr').onclick = () => { out.textContent = ''; log.textContent = ''; };

  async function run() {
    showPanel('out'); out.textContent = '';
    const n = st.active;
    if (!n?.endsWith('.py')) { append(out, '請先選擇一個 .py 檔案再執行。\n', 'err'); return; }
    runBtn.disabled = true; $('#v-st').textContent = '執行中…';
    const t0 = performance.now();
    await rt.runFile(st.files[n], n, { out: (t, c) => append(out, t, c), err: (t) => append(out, t, 'err') });
    $('#v-st').textContent = `完成（${((performance.now() - t0) / 1000).toFixed(2)} 秒）`;
    runBtn.disabled = false;
  }
  runBtn.onclick = run; runBtn.disabled = true;
  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, run);
  editor.addCommand(monaco.KeyCode.F5, run);

  // 終端機：互動式 REPL，變數與 Colab 模式共用
  const hist = []; let hi = 0;
  $('#v-in').onkeydown = async (e) => {
    const inp = e.target;
    if (e.key === 'ArrowUp' && hist.length) { hi = Math.max(0, hi - 1); inp.value = hist[hi]; return; }
    if (e.key === 'ArrowDown') { hi = Math.min(hist.length, hi + 1); inp.value = hist[hi] ?? ''; return; }
    if (e.key !== 'Enter' || !inp.value.trim()) return;
    const code = inp.value; inp.value = ''; hist.push(code); hi = hist.length;
    append(log, '>>> ' + code + '\n', 'dim');
    await rt.runCell(code, { out: (t, c) => append(log, t, c), err: (t) => append(log, t, 'err') });
  };
  rt.ready.then(() => { runBtn.disabled = false; $('#v-st').textContent = 'Python 已就緒'; });
}
