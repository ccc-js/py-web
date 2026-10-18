// 共用的 Python 核心：VS Code 模式與 Colab 模式使用同一個 Pyodide
import '@pyscript/core/css';
import { hooks } from '@pyscript/core/js';
import { store } from './files.js';

let py = null;
let sink = { out() {}, err() {} };
const HOME = '/home/pyodide';

const HELPER = `
import ast, sys
__nb_out__ = None
def _nb_prep(code):
    try:
        t = compile(code, '<cell>', 'exec', flags=ast.PyCF_ONLY_AST | ast.PyCF_ALLOW_TOP_LEVEL_AWAIT)
    except SyntaxError:
        return code
    if t.body and isinstance(t.body[-1], ast.Expr):
        n = t.body[-1]
        new = ast.Assign(targets=[ast.Name('__nb_out__', ast.Store())], value=n.value)
        t.body[-1] = ast.copy_location(new, n)
        ast.fix_missing_locations(t)
        return ast.unparse(t)
    return code
def _nb_show():
    global __nb_out__
    v, __nb_out__ = __nb_out__, None
    return None if v is None else repr(v)
def _nb_reset():
    keep = {'_nb_prep', '_nb_show', '_nb_reset', 'ast', 'sys'}
    for k in list(globals()):
        if not k.startswith('__') and k not in keep:
            del globals()[k]
    for m in [m for m, v in sys.modules.items() if str(getattr(v, '__file__', '') or '').startswith('${HOME}/')]:
        del sys.modules[m]
`;

export const ready = new Promise((resolve) => {
  const onReady = (wrap) => {
    py = wrap.interpreter;
    py.setStdout({ batched: (s) => sink.out(s + '\n') });
    py.setStderr({ batched: (s) => sink.err(s + '\n') });
    py.setStdin({ stdin: () => prompt('Python 輸入：') ?? '' });
    py.runPython(HELPER);
    resolve();
  };
  const h = hooks.main.onReady;
  typeof h?.add === 'function' ? h.add(onReady) : (hooks.main.onReady = onReady);
});

// 把側欄所有檔案寫入虛擬檔案系統（HOME 為工作目錄），open() 與 import 都讀得到
let written = new Set();
function syncFiles() {
  const files = store.state.files;
  for (const n of written) if (!(n in files)) { try { py.FS.unlink(`${HOME}/${n}`); } catch {} }
  written = new Set();
  for (const [n, text] of Object.entries(files)) {
    const p = `${HOME}/${n}`;
    try { py.FS.mkdirTree(p.slice(0, p.lastIndexOf('/'))); } catch {}
    py.FS.writeFile(p, text); written.add(n);
  }
  py.runPython(`import sys, os, importlib
os.chdir("${HOME}")
if "${HOME}" not in sys.path: sys.path.insert(0, "${HOME}")
importlib.invalidate_caches()`);
}

// 程式若修改了側欄裡的檔案（例如 open(..., "a") 追加內容），把結果同步回編輯器
function pullBack() {
  for (const n of Object.keys(store.state.files)) {
    try { store.update(n, py.FS.readFile(`${HOME}/${n}`, { encoding: 'utf8' })); } catch {}
  }
}

function clean(e) {
  const m = String(e.message ?? e).trimEnd();
  const i = m.indexOf('File "<exec>"');
  return (i > 0 ? 'Traceback (most recent call last):\n  ' + m.slice(i) : m) + '\n';
}

export const reset = () => py.runPython('_nb_reset()');

// 儲存格 / REPL：保留全域變數，並顯示最後一個運算式的值
export async function runCell(code, s) {
  sink = s;
  try {
    syncFiles();
    await py.loadPackagesFromImports(code);
    await py.runPythonAsync(py.globals.get('_nb_prep')(code));
    const r = py.globals.get('_nb_show')();
    if (r != null) s.out(r + '\n', 'res');
  } catch (e) { s.err(clean(e)); } finally { pullBack(); }
}

// 執行整個檔案：每次都從乾淨的命名空間開始，像 `python main.py`
export async function runFile(code, name, s) {
  sink = s;
  try {
    reset(); syncFiles();
    await py.loadPackagesFromImports(code);
    await py.runPythonAsync(code, { filename: `${HOME}/${name}` });
  } catch (e) { s.err(clean(e)); } finally { pullBack(); }
}
