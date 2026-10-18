import './style.css';
import { monaco, themeName } from './monaco.js';
import { mountIDE } from './ide.js';
import { mountNotebook } from './notebook.js';

const root = document.documentElement;
mountIDE(document.getElementById('vsc'));
mountNotebook(document.getElementById('nb'));

function setMode(m) {
  root.dataset.mode = m;
  localStorage.setItem('py-ide:mode', m);
  document.querySelectorAll('.seg button').forEach((b) => b.classList.toggle('on', b.dataset.m === m));
}
document.querySelectorAll('.seg button').forEach((b) => (b.onclick = () => setMode(b.dataset.m)));
setMode(localStorage.getItem('py-ide:mode') || 'vscode');

root.dataset.theme = localStorage.getItem('py-ide:theme') || 'dark';
monaco.editor.setTheme(themeName());
document.getElementById('theme').onclick = () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('py-ide:theme', root.dataset.theme);
  monaco.editor.setTheme(themeName());
};
