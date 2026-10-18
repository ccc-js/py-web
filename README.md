# Python IDE（Monaco + PyScript）

線上版 -- https://ccc-js.github.io/py-web/dist/index.html

純前端，無需後端。

    npm install
    npm run dev      # 開發
    npm run build    # 產出 dist/，可放到任何靜態空間
    npm run preview  # 預覽 dist/

注意：dist/ 需透過 http(s) 提供（不能直接用 file:// 開啟）。

## 兩種模式
- **VS Code 模式**：檔案總管、分頁、Monaco 編輯器、輸出面板、互動式終端機（REPL）、狀態列。F5 / Ctrl+Enter 執行整個檔案（每次從乾淨環境開始）。
- **Colab 模式**：儲存格（程式碼 / 文字）、Shift+Enter 執行並跳下一格、變數跨儲存格保留、最後一行自動顯示值、重新啟動執行階段、匯出 .ipynb。
- 兩種模式共用同一個 Pyodide；Colab 儲存格可以 import VS Code 模式裡的 `.py` 檔。
