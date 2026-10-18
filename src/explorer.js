import { store } from './files.js';
import { buildTree, dirIcon } from './examples.js';

const icon = (n) => (n.endsWith('.py') ? '🐍' : '📄');

// 側欄檔案總管：＋ 新增（直接在清單中輸入檔名）、雙擊或 ✎ 改名、✕ 刪除、⬆ 上傳、拖放檔案
// 底部「📚 範例庫」：展開後顯示 examples/ 子資料夾，點「載入」複製進工作區
export function mountExplorer(el, { onOpen, isActive }) {
  el.innerHTML = `<div class="side-h"><span>檔案總管</span><span>
    <button data-a="new" title="新增檔案">＋</button><button data-a="up" title="上傳檔案">⬆</button></span></div>
    <div class="flist"></div>
    <div class="ex-section">
      <div class="ex-hdr" id="ex-toggle"><span class="ex-arrow">▶</span><span>📚 範例庫</span></div>
      <div class="ex-tree" hidden></div>
    </div>
    <input type="file" multiple hidden>`;

  const list   = el.querySelector('.flist');
  const exHdr  = el.querySelector('#ex-toggle');
  const exTree = el.querySelector('.ex-tree');
  const fin    = el.querySelector('input[type=file]');
  let editing = null; // { name } 改名；{} 新增
  let exOpen = false; // 範例庫展開狀態

  // ── 工作區檔案渲染 ───────────────────────────
  function editRow(value, commit) {
    const r = document.createElement('div'); r.className = 'file editing';
    const i = document.createElement('input'); i.value = value; i.spellcheck = false;
    const msg = document.createElement('div'); msg.className = 'msg';
    r.append(i, msg);
    let done = false;
    const finish = (enter) => {
      if (done) return;
      const v = i.value.trim();
      if (!v || v === value) { done = true; editing = null; render(); return; }
      const prev = editing; editing = null;
      try { commit(v); done = true; render(); }
      catch (err) {
        if (enter) { editing = prev; i.classList.add('bad'); msg.textContent = err.message; i.focus(); }
        else { done = true; render(); }
      }
    };
    i.onkeydown = (e) => { if (e.key === 'Enter') finish(true); if (e.key === 'Escape') { done = true; editing = null; render(); } };
    i.oninput = () => { i.classList.remove('bad'); msg.textContent = ''; };
    i.onblur = () => finish(false);
    setTimeout(() => { i.focus(); const d = value.lastIndexOf('.'); i.setSelectionRange(0, d > 0 ? d : value.length); }, 0);
    return r;
  }

  function render() {
    list.innerHTML = '';
    if (editing && editing.name === undefined) list.appendChild(editRow('', (v) => onOpen(store.create(v))));
    for (const n of Object.keys(store.state.files)) {
      if (editing?.name === n) { list.appendChild(editRow(n, (v) => store.rename(n, v))); continue; }
      const r = document.createElement('div');
      r.className = 'file'; r.dataset.n = n;
      r.innerHTML = '<span class="nm"></span><span class="acts"><button class="x" data-a="ren" title="重新命名">✎</button><button class="x" data-a="del" title="刪除">✕</button></span>';
      r.firstChild.textContent = icon(n) + ' ' + n;
      r.onclick = (e) => {
        const a = e.target.dataset.a;
        if (a === 'ren') { editing = { name: n }; render(); }
        else if (a === 'del') { if (confirm(`刪除 ${n}？`)) store.remove(n); }
        else onOpen(n);
      };
      r.ondblclick = (e) => { if (!e.target.dataset.a) { editing = { name: n }; render(); } };
      list.appendChild(r);
    }
    mark();
  }
  const mark = () => list.querySelectorAll('.file[data-n]').forEach((r) => r.classList.toggle('on', isActive(r.dataset.n)));

  // ── 範例庫渲染 ──────────────────────────────
  function renderExamples() {
    exTree.innerHTML = '';
    const tree = buildTree();

    // 資料夾排序：頂層（''）最後
    const dirs = Object.keys(tree).filter((d) => d !== '').sort();
    if (tree['']) dirs.push('');

    for (const dir of dirs) {
      const files = tree[dir];
      if (dir !== '') {
        // 資料夾標頭（可折疊）
        const folderRow = document.createElement('div');
        folderRow.className = 'ex-folder';
        folderRow.dataset.dir = dir;
        folderRow.innerHTML =
          `<span class="ex-f-arrow">▶</span>` +
          `<span>${dirIcon(dir)} ${dir}/</span>`;
        folderRow.onclick = () => {
          folderRow.classList.toggle('open');
          const body = folderRow.nextElementSibling;
          if (body?.classList.contains('ex-folder-body')) body.hidden = !body.hidden;
        };
        exTree.appendChild(folderRow);

        // 資料夾內容
        const body = document.createElement('div');
        body.className = 'ex-folder-body';
        body.hidden = true;
        for (const [name, content] of Object.entries(files)) {
          body.appendChild(makeFileRow(name, { [name]: content }, name, dir));
        }
        exTree.appendChild(body);
      } else {
        // 頂層散落檔案
        for (const [name, content] of Object.entries(files)) {
          exTree.appendChild(makeFileRow(name, { [name]: content }, name, ''));
        }
      }
    }
  }

  // 建立單一範例檔案列
  function makeFileRow(label, filesMap, entryName, dir) {
    const r = document.createElement('div');
    r.className = 'ex-file';
    r.innerHTML =
      `<span class="nm">${icon(label)} ${label}</span>` +
      `<button class="ex-load" title="載入到工作區">載入</button>`;
    r.querySelector('.ex-load').onclick = (e) => {
      e.stopPropagation();
      loadExFiles(filesMap, entryName);
    };
    r.onclick = (e) => { if (e.target.tagName !== 'BUTTON') loadExFiles(filesMap, entryName); };
    return r;
  }

  // 把 { name: content } 複製進工作區並開啟入口檔
  function loadExFiles(filesMap, entryName) {
    for (const [name, content] of Object.entries(filesMap)) {
      if (name in store.state.files) {
        if (!confirm(`「${name}」已存在，要用範例覆蓋嗎？`)) continue;
        store.setContent(name, content);
        // 同步更新 Monaco model（若已開啟）
        import('./files.js').then(({ modelOf }) => {
          try { modelOf(name).setValue(content); } catch {}
        });
      } else {
        store.create(name, content);
      }
    }
    store.open(entryName);
    onOpen(entryName);
  }

  // 範例庫展開/收合
  exHdr.onclick = () => {
    exOpen = !exOpen;
    exHdr.classList.toggle('open', exOpen);
    exTree.hidden = !exOpen;
    if (exOpen) renderExamples();
  };

  // 上方工具列按鈕
  el.querySelector('.side-h').onclick = (e) => {
    const a = e.target.dataset.a;
    if (a === 'new') { editing = {}; render(); }
    if (a === 'up') fin.click();
  };
  fin.onchange = () => { addFiles([...fin.files]); fin.value = ''; };
  el.ondragover = (e) => { e.preventDefault(); el.classList.add('dropping'); };
  el.ondragleave = () => el.classList.remove('dropping');
  el.ondrop = (e) => { e.preventDefault(); el.classList.remove('dropping'); addFiles([...e.dataTransfer.files]); };

  async function addFiles(files) {
    let last;
    for (const f of files) {
      let name = f.name, k = 1;
      while (name in store.state.files) name = f.name.replace(/(\.[^.]*)?$/, ` (${k++})$1`);
      last = store.create(name, await f.text()); // 以文字讀入；二進位檔案不適用
    }
    if (last) onOpen(last);
  }

  store.on((e) => (e.type === 'open' || e.type === 'close' ? mark() : render()));
  render();
  return { mark, render };
}
