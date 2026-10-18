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

# ── PNG → base64 → inject into output panel ──────
buf = io.BytesIO()
plt.savefig(buf, format='png', dpi=110, bbox_inches='tight',
            facecolor=fig.get_facecolor())
plt.close()
buf.seek(0)

img_b64 = base64.b64encode(buf.read()).decode()
img = document.createElement('img')
img.src = f'data:image/png;base64,{img_b64}'
img.style.maxWidth = '100%'
img.style.display = 'block'
img.style.margin = '8px 0'
img.style.borderRadius = '4px'

out = document.getElementById('v-out') or document.querySelector('.co')
if out:
    out.appendChild(img)

print('Chart rendered above.')
