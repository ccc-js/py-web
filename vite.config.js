import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // 讓 dist/ 可放在任何子路徑或靜態空間
  build: { target: 'esnext', outDir: 'dist', chunkSizeWarningLimit: 6000 },
  worker: { format: 'es' },
  // PyScript 的預建檔案含動態載入的子檔案，不要讓 Vite 預先打包
  optimizeDeps: { exclude: ['@pyscript/core'], esbuildOptions: { target: 'esnext' } },
});
