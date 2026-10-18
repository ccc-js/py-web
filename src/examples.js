// 用 Vite import.meta.glob 自動掃描 examples/ 下所有檔案
// 新增子資料夾或檔案後，重新 build 即自動出現，無需手動維護清單

const _raw = import.meta.glob('./examples/**/*', { query: '?raw', import: 'default', eager: true });

// 轉成 { 'ai/microgpt.py': '...', 'numpy/numpy_basic.py': '...', ... }
export const EXAMPLE_FILES = Object.fromEntries(
  Object.entries(_raw).map(([k, v]) => [k.replace('./examples/', ''), v])
);

// 有相依檔案的範例，載入入口時一併建立所需的模組與資料檔。
const EXAMPLE_BUNDLES = {
  'ai/microgpt.py': ['ai/microgpt.py', 'ai/input.txt'],
  'nn/nn-gpt.py': ['nn/nn-gpt.py', 'nn/nn.py', 'ai/input.txt'],
  'nn-numpy/nn-gpt.py': ['nn-numpy/nn-gpt.py', 'nn-numpy/nn.py', 'ai/input.txt'],
};

export function filesForExample(path) {
  const paths = EXAMPLE_BUNDLES[path] ?? [path];
  return Object.fromEntries(paths.map((item) => [item.slice(item.lastIndexOf('/') + 1), EXAMPLE_FILES[item]]));
}

// 從路徑建出一層樹：{ dirName: { fileName: content, ... }, ... }
// 目前只支援一層子目錄（dir/file.ext），頂層檔案歸入 '' 鍵
export function buildTree() {
  const tree = {};
  for (const [path, content] of Object.entries(EXAMPLE_FILES)) {
    const slash = path.indexOf('/');
    if (slash === -1) {
      tree[''] ??= {};
      tree[''][path] = content;
    } else {
      const dir = path.slice(0, slash);
      const file = path.slice(slash + 1);
      tree[dir] ??= {};
      tree[dir][file] = content;
    }
  }
  return tree;
}

// 各分類的圖示對照（不在表內則用 📁）
const DIR_ICONS = {
  ai:         '🤖',
  nn:         '🧠',
  'nn-numpy': '⚡',
  numpy:      '🔢',
  pandas:     '🐼',
  matplotlib: '📊',
  scipy:      '🔬',
  sklearn:    '🧠',
};
export const dirIcon = (name) => DIR_ICONS[name] ?? '📁';
