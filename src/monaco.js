import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
self.MonacoEnvironment = { getWorker: () => new editorWorker() };
export { monaco };
export const themeName = () => (document.documentElement.dataset.theme === 'light' ? 'vs' : 'vs-dark');
