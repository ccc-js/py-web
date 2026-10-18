import { store } from './files.js';

const icon = (n) => (n.endsWith('.py') ? '🐍' : '📄');

// 側欄檔案總管：＋ 新增（直接在清單中輸入檔名）、雙擊或 ✎ 改名、✕ 刪除、⬆ 上傳、拖放檔案
export function mountExplorer(el, { onOpen, isActive }) {
  el.innerHTML = `<div class="side-h"><span>檔案總管</span><span>
    <button data-a="new" title="新增檔案">＋</button><button data-a="up" title="上傳檔案">⬆</button></span></div>
    <div class="flist"></div><input type="file" multiple hidden>`;
  const list = el.querySelector('.flist'), fin = el.querySelector('input[type=file]');
  let editing = null; // { name } 改名；{} 新增

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

  async function addFiles(files) {
    let last;
    for (const f of files) {
      let name = f.name, k = 1;
      while (name in store.state.files) name = f.name.replace(/(\.[^.]*)?$/, ` (${k++})$1`);
      last = store.create(name, await f.text()); // 以文字讀入；二進位檔案不適用
    }
    if (last) onOpen(last);
  }
  el.querySelector('.side-h').onclick = (e) => {
    const a = e.target.dataset.a;
    if (a === 'new') { editing = {}; render(); }
    if (a === 'up') fin.click();
  };
  fin.onchange = () => { addFiles([...fin.files]); fin.value = ''; };
  el.ondragover = (e) => { e.preventDefault(); el.classList.add('dropping'); };
  el.ondragleave = () => el.classList.remove('dropping');
  el.ondrop = (e) => { e.preventDefault(); el.classList.remove('dropping'); addFiles([...e.dataTransfer.files]); };

  store.on((e) => (e.type === 'open' || e.type === 'close' ? mark() : render()));
  render();
  return { mark, render };
}
