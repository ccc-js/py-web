# AGENTS.md

純前端 Python IDE（Monaco + PyScript/Pyodide），Vite 6，vanilla ESM，無框架、無測試、無 linter。UI 與註解為繁體中文，新增文字請沿用。

## 命令

- `npm run dev` / `npm run build` / `npm run preview`
- 只有這三支 script；無 test / lint / typecheck。
- `dist/` 必須以 http(s) 提供，`file://` 無法載入。

## 部署（重要，易搞錯）

- `dist/` **刻意提交到 git**（`.gitignore` 裡 `# dist` 被註解掉）。
- GitHub Pages（`.github/workflows/static.yml`）**不會跑 build**，直接把整個 repo（`path: '.'`）上線，線上版是 repo 裡的 `dist/`。
- 所以改完 src 後必須：`npm run build` → 連同 `dist/` 一起 commit，變更才會上線。

## 架構

- `src/runtime.js` — 兩種模式共用**同一個 Pyodide**（PyScript hooks 啟動）。`runCell()` 保留全域變數並顯示最後一式值；`runFile()` 先 `_nb_reset()` 再執行（如同 `python main.py`）。
- 執行前 `syncFiles()` 把側欄檔案寫入 Pyodide 虛擬 FS 的 `/home/pyodide`（cwd + `sys.path`），`open()` / `import` 都讀得到；執行後 `pullBack()` 把程式改過的檔案同步回編輯器。
- `src/files.js` — 共用檔案庫，存 localStorage key `py-ide:v2`；內建範例由 `src/examples/*.py?raw` 匯入，首次載入 seeding 一次（`seeded` 陣列）。
- `src/ide.js`（VS Code 模式）與 `src/notebook.js`（Colab 模式）**同時 mount**，靠 `<html data-mode>` 切換顯示；筆記本儲存格另存 localStorage key `py-ide:nb1`。

## Vite 設定勿動

- `optimizeDeps.exclude: ['@pyscript/core']` — PyScript 預建檔含動態載入的子檔，讓 Vite 預先打包會壞掉。
- `base: './'`（dist 可放任意子路徑）、`build.target: 'esnext'`、`worker.format: 'es'`。

## 其他

- `index.html` 裡的 `<script type="py">pass</script>` 是刻意的啟動觸發器（實際執行由 `src/runtime.js` 控制），不要刪。
- 線上版：https://ccc-js.github.io/py-web/dist/index.html
