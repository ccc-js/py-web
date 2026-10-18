# Matplotlib Demo: Line Plot, Histogram, Scatter Plot
# Uses agg backend → PNG → base64 → DOM injection (works in Pyodide/PyScript)
import numpy as np
import matplotlib
matplotlib.use('agg')
import matplotlib.pyplot as plt
import io, base64
from js import document

# ── Dark theme ───────────────────────────────────
plt.rcParams.update({
    'figure.facecolor': '#1e1e1e', 'axes.facecolor':  '#252526',
    'axes.edgecolor':   '#555',    'axes.labelcolor': '#ccc',
    'xtick.color':      '#888',    'ytick.color':     '#888',
    'text.color':       '#d4d4d4', 'grid.color':      '#3c3c3c',
    'legend.facecolor': '#2d2d2d', 'legend.edgecolor':'#555',
})

rng = np.random.default_rng(42)
fig, axes = plt.subplots(1, 3, figsize=(13, 4))
fig.suptitle('Matplotlib Demo: Line / Histogram / Scatter', fontsize=13)

# ── 1. Line: sin / cos ───────────────────────────
x = np.linspace(0, 2 * np.pi, 200)
ax = axes[0]
ax.plot(x, np.sin(x), label='sin(x)', linewidth=2)
ax.plot(x, np.cos(x), linestyle='--', label='cos(x)', linewidth=2)
ax.set_title('sin / cos')
ax.set_xlabel('x'); ax.set_ylabel('y')
ax.legend(); ax.grid(alpha=0.4)

# ── 2. Histogram: normal distribution ────────────
data = rng.normal(loc=0, scale=1, size=2000)
ax = axes[1]
ax.hist(data, bins=40, color='#4fc1a6', edgecolor='#1e1e1e', alpha=0.85)
ax.axvline(data.mean(), color='#f48771', linewidth=1.8,
           label=f'mean={data.mean():.2f}')
ax.set_title('Normal Distribution (n=2000)')
ax.set_xlabel('Value'); ax.set_ylabel('Count')
ax.legend(); ax.grid(alpha=0.4)

# ── 3. Scatter: two clusters ─────────────────────
c1 = rng.normal([ 2,  2], 0.8, (150, 2))
c2 = rng.normal([-1, -1], 0.8, (150, 2))
ax = axes[2]
ax.scatter(c1[:, 0], c1[:, 1], alpha=0.65, label='Cluster A', s=25)
ax.scatter(c2[:, 0], c2[:, 1], alpha=0.65, label='Cluster B', s=25)
ax.set_title('Scatter: Two Clusters')
ax.legend(); ax.grid(alpha=0.4)

plt.tight_layout()

# ── PNG → base64 → 在浮現視窗顯示 ──────────────────
buf = io.BytesIO()
plt.savefig(buf, format='png', dpi=110, bbox_inches='tight',
            facecolor=fig.get_facecolor())
plt.close()
buf.seek(0)

img_b64 = base64.b64encode(buf.read()).decode()
# 重複執行時，取代前一張圖表而非疊加視窗。
old = document.getElementById('matplotlib-chart-window')
if old:
    old.remove()

modal = document.createElement('div')
modal.id = 'matplotlib-chart-window'
modal.setAttribute('role', 'dialog')
modal.setAttribute('aria-modal', 'true')
modal.setAttribute('aria-label', 'Matplotlib 圖表')
modal.style.cssText = (
    'position:fixed; inset:0; z-index:10000; display:flex; '
    'align-items:center; justify-content:center; padding:24px; '
    'box-sizing:border-box; background:rgba(0, 0, 0, .62);'
)

panel = document.createElement('div')
panel.style.cssText = (
    'position:relative; width:min(1100px, 100%); max-height:100%; '
    'overflow:auto; box-sizing:border-box; padding:42px 16px 16px; '
    'border:1px solid #555; border-radius:8px; background:#1e1e1e; '
    'box-shadow:0 16px 48px rgba(0, 0, 0, .55);'
)

img = document.createElement('img')
img.src = f'data:image/png;base64,{img_b64}'
img.alt = 'Matplotlib Demo: Line, Histogram, Scatter'
img.style.cssText = 'display:block; width:100%; height:auto; border-radius:4px;'

close_btn = document.createElement('button')
close_btn.textContent = '✕ 關閉'
close_btn.setAttribute('aria-label', '關閉圖表')
close_btn.style.cssText = (
    'position:absolute; top:10px; right:12px; border:1px solid #666; '
    'border-radius:4px; padding:5px 9px; color:#ddd; background:#333; '
    'cursor:pointer; font:inherit;'
)

def close_chart(event=None):
    modal.remove()
    document.onkeydown = None

def close_on_backdrop(event):
    if event.target.id == 'matplotlib-chart-window':
        close_chart()

def close_on_escape(event):
    if event.key == 'Escape':
        close_chart()

close_btn.onclick = close_chart
modal.onclick = close_on_backdrop
document.onkeydown = close_on_escape
panel.appendChild(close_btn)
panel.appendChild(img)
modal.appendChild(panel)
document.body.appendChild(modal)
close_btn.focus()

print('圖表已在浮現視窗中開啟。')
