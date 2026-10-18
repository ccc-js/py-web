// 共用檔案庫：VS Code 模式與 Colab 模式共用，也是 Python open() 讀得到的檔案
import { monaco } from './monaco.js';

const KEY = 'py-ide:v2';
const DEF = { active: 'main.py', open: ['main.py', 'utils.py'], files: {
  'main.py': 'from utils import greet\n\nprint(greet("世界"))\nprint(open("data.txt", encoding="utf-8").read())\n',
  'utils.py': 'def greet(name):\n    return f"哈囉，{name}！"\n',
  'data.txt': '這是 data.txt\n在 Python 裡用 open("data.txt") 就能讀到我\n',
}};
let st;
try { st = JSON.parse(localStorage.getItem(KEY)) || DEF; } catch { st = DEF; }
st.open = (st.open || []).filter((n) => n in st.files);
if (!(st.active in st.files)) st.active = st.open[0] ?? Object.keys(st.files)[0] ?? null;

const subs = new Set();
const models = {};
const save = () => localStorage.setItem(KEY, JSON.stringify(st));
const emit = (e) => { save(); subs.forEach((f) => f(e)); };
function check(name, except) {
  name = name.trim();
  if (!name) throw new Error('檔名不能是空的');
  if (/^\/|\\|\/$|(^|\/)\.\.(\/|$)/.test(name)) throw new Error('檔名不合法');
  if (name !== except && name in st.files) throw new Error(`已經有 ${name} 了`);
  return name;
}
const drop = (n) => { models[n]?.dispose(); delete models[n]; };

export const store = {
  get state() { return st; },
  on(f) { subs.add(f); return () => subs.delete(f); },
  create(name, content = '') { name = check(name); st.files[name] = content; emit({ type: 'create', name }); return name; },
  rename(old, to) {
    to = check(to, old); if (to === old) return;
    const f = {};
    for (const [k, v] of Object.entries(st.files)) f[k === old ? to : k] = v;
    st.files = f;
    st.open = st.open.map((n) => (n === old ? to : n));
    if (st.active === old) st.active = to;
    drop(old); emit({ type: 'rename', name: old, to });
  },
  remove(name) {
    delete st.files[name];
    st.open = st.open.filter((n) => n !== name);
    if (st.active === name) st.active = st.open.at(-1) ?? null;
    drop(name); emit({ type: 'remove', name });
  },
  open(name) { if (!st.open.includes(name)) st.open.push(name); st.active = name; emit({ type: 'open', name }); },
  close(name) {
    const i = st.open.indexOf(name); st.open.splice(i, 1);
    if (st.active === name) st.active = st.open[Math.min(i, st.open.length - 1)] ?? null;
    emit({ type: 'close', name });
  },
  setContent(name, text) { st.files[name] = text; save(); }, // 編輯時靜默儲存
  update(name, text) { // Python 改了檔案內容時同步回來
    if (st.files[name] === text) return;
    st.files[name] = text;
    if (models[name] && models[name].getValue() !== text) models[name].setValue(text);
    save();
  },
};

// 每個檔案一個 Monaco model，兩種模式的編輯器共用；語言依副檔名自動判斷
export function modelOf(name) {
  if (!models[name]) {
    const m = monaco.editor.createModel(st.files[name], undefined, monaco.Uri.from({ scheme: 'file', path: '/' + name }));
    m.onDidChangeContent(() => store.setContent(name, m.getValue()));
    models[name] = m;
  }
  return models[name];
}
