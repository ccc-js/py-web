const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./files-C0qTJspE.js","./editor.api-C-xGocuI.js","./preload-helper-Ct5FWWRu.js","./editor-CP2cXDiA.css","./monaco.contribution-z6V7X9uP.js","./files-oVf4fuzy.css"])))=>i.map(i=>d[i]);
import{s as g,t as N,m as I}from"./files-C0qTJspE.js";import{L as F}from"./core-qH_pqHwH-C9_6Qe8-.js";import{_ as Y}from"./preload-helper-Ct5FWWRu.js";import{e as A,K as D,a as T}from"./editor.api-C-xGocuI.js";import"./monaco.contribution-z6V7X9uP.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))d(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();let b=null,$={out(){},err(){}};const P="/home/pyodide",Q=`
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
    for m in [m for m, v in sys.modules.items() if str(getattr(v, '__file__', '') or '').startswith('${P}/')]:
        del sys.modules[m]
`,H=new Promise(t=>{const n=d=>{b=d.interpreter,b.setStdout({batched:c=>$.out(c+`
`)}),b.setStderr({batched:c=>$.err(c+`
`)}),b.setStdin({stdin:()=>prompt("Python 輸入：")??""}),b.runPython(Q),t()},r=F.main.onReady;typeof r?.add=="function"?r.add(n):F.main.onReady=n});let B=new Set;function X(){const t=g.state.files;for(const n of B)if(!(n in t))try{b.FS.unlink(`${P}/${n}`)}catch{}B=new Set;for(const[n,r]of Object.entries(t)){const d=`${P}/${n}`;try{b.FS.mkdirTree(d.slice(0,d.lastIndexOf("/")))}catch{}b.FS.writeFile(d,r),B.add(n)}b.runPython(`import sys, os, importlib
os.chdir("${P}")
if "${P}" not in sys.path: sys.path.insert(0, "${P}")
importlib.invalidate_caches()`)}function V(){for(const t of Object.keys(g.state.files))try{g.update(t,b.FS.readFile(`${P}/${t}`,{encoding:"utf8"}))}catch{}}function G(t){const n=String(t.message??t).trimEnd(),r=n.indexOf('File "<exec>"');return(r>0?`Traceback (most recent call last):
  `+n.slice(r):n)+`
`}const K=()=>b.runPython("_nb_reset()");async function U(t,n){$=n;try{X(),await b.loadPackagesFromImports(t),await b.runPythonAsync(b.globals.get("_nb_prep")(t));const r=b.globals.get("_nb_show")();r!=null&&n.out(r+`
`,"res")}catch(r){n.err(G(r))}finally{V()}}async function Z(t,n,r){$=r;try{K(),X(),await b.loadPackagesFromImports(t),await b.runPythonAsync(t,{filename:`${P}/${n}`})}catch(d){r.err(G(d))}finally{V()}}const ee=`小貓坐在桌上
小狗跑在路上
小鳥飛在天上
小魚游在水中
大貓坐在地上
大狗跑在地上
大鳥飛在山上
小貓吃了魚
小狗吃了肉
小鳥吃了蟲
小魚吃了草
大貓吃了魚
大狗吃了肉
大鳥吃了蟲
我看到一隻小貓
我看到一隻小狗
我看到一隻小鳥
我看到一隻小魚
你看到一隻大貓
你看到一隻大狗
你看到一隻大鳥
他看到一隻大魚
我喜歡小貓
我喜歡小狗
我喜歡小鳥
你喜歡大貓
你喜歡大狗
他喜歡小魚
她喜歡大鳥
天上有白雲
天上有太陽
天上有月亮
天上有星星
山上有大樹
山上有小花
山上有小草
水中有小魚
水中有大魚
地上有小貓
地上有大狗
今天天氣好
今天太陽大
今天風很大
今天雨很大
小貓很可愛
小狗很可愛
小鳥很可愛
大貓很漂亮
大狗很漂亮
大鳥很漂亮
我去學校上課
你去學校上課
他去學校上課
她去學校上課
我在家裡吃飯
你在家裡吃飯
他在家裡看書
她在家裡看書
我和你是好朋友
你和他是好朋友
他和她是好朋友
我們都是好朋友
早上太陽出來了
中午太陽很大
下午風很大
晚上月亮出來了
晚上星星很多
小花很漂亮
小草很多
大樹很高
白雲很白
太陽很大
月亮很亮
星星很小
我愛吃飯
你愛看書
他愛跑步
她愛唱歌
我會寫字
你會看書
他會跑步
她會唱歌
我想吃魚
你想吃肉
他想看書
她想唱歌
一隻小貓在桌上
一隻小狗在地上
一隻小鳥在天上
一隻小魚在水中
兩隻小貓在地上
兩隻小狗在路上
三隻小鳥在天上
很多小魚在水中
春天小花很多
夏天太陽很大
秋天風很大
冬天雨很大
春天很美
夏天很熱
秋天很涼
冬天很冷
我在春天看花
你在夏天游水
他在秋天看書
她在冬天唱歌
小貓和小狗是好朋友
小鳥和小魚是好朋友
大貓和大狗是好朋友
我和小貓是好朋友
你和小狗是好朋友
他喜歡在山上跑步
她喜歡在水中游水
我喜歡在家裡看書
你喜歡在學校上課
天上的白雲很漂亮
山上的大樹很高
水中的小魚很可愛
地上的小花很美
早上我去學校上課
中午我在學校吃飯
下午我在家裡看書
晚上我在家裡吃飯
早上你去學校上課
中午你在學校吃飯
下午你在家裡看書
晚上你在家裡吃飯
小貓在家裡
小狗在路上
小鳥在山上
小魚在水中
大樹在山上
小花在地上
太陽在天上
月亮在天上
星星在天上
白雲在天上
我很開心
你很開心
他很開心
她很開心
我們很開心
大家都很開心
今天很開心
我今天很開心
你今天很開心
他今天很開心
`,ne=`"""
The most atomic way to train and run inference for a GPT in pure, dependency-free Python.
This file is the complete algorithm.
Everything else is just efficiency.
@karpathy

（瀏覽器版小改動：讀檔指定 utf-8、訓練迴圈每幾步用 await asyncio.sleep(0)
  讓出控制權，頁面才不會卡死、進度才看得到。資料來自側欄的 input.txt。）
"""

import os       # os.path.exists
import math     # math.log, math.exp
import random   # random.seed, random.choices, random.gauss, random.shuffle
import asyncio  # 僅為了在瀏覽器裡定期讓出控制權
random.seed(42) # Let there be order among chaos

# Let there be a Dataset \`docs\`: list[str] of documents (e.g. a list of names)
if not os.path.exists('input.txt'):
    import urllib.request
    names_url = 'https://raw.githubusercontent.com/karpathy/makemore/988aa59/names.txt'
    urllib.request.urlretrieve(names_url, 'input.txt')
docs = [line.strip() for line in open('input.txt', encoding='utf-8') if line.strip()]
random.shuffle(docs)
print(f"num docs: {len(docs)}")

# Let there be a Tokenizer to translate strings to sequences of integers ("tokens") and back
uchars = sorted(set(''.join(docs))) # unique characters in the dataset become token ids 0..n-1
BOS = len(uchars) # token id for a special Beginning of Sequence (BOS) token
vocab_size = len(uchars) + 1 # total number of unique tokens, +1 is for BOS
print(f"vocab size: {vocab_size}")

# Let there be Autograd to recursively apply the chain rule through a computation graph
class Value:
    __slots__ = ('data', 'grad', '_children', '_local_grads') # Python optimization for memory usage

    def __init__(self, data, children=(), local_grads=()):
        self.data = data                # scalar value of this node calculated during forward pass
        self.grad = 0                   # derivative of the loss w.r.t. this node, calculated in backward pass
        self._children = children       # children of this node in the computation graph
        self._local_grads = local_grads # local derivative of this node w.r.t. its children

    def __add__(self, other):
        other = other if isinstance(other, Value) else Value(other)
        return Value(self.data + other.data, (self, other), (1, 1))

    def __mul__(self, other):
        other = other if isinstance(other, Value) else Value(other)
        return Value(self.data * other.data, (self, other), (other.data, self.data))

    def __pow__(self, other): return Value(self.data**other, (self,), (other * self.data**(other-1),))
    def log(self): return Value(math.log(self.data), (self,), (1/self.data,))
    def exp(self): return Value(math.exp(self.data), (self,), (math.exp(self.data),))
    def relu(self): return Value(max(0, self.data), (self,), (float(self.data > 0),))
    def __neg__(self): return self * -1
    def __radd__(self, other): return self + other
    def __sub__(self, other): return self + (-other)
    def __rsub__(self, other): return other + (-self)
    def __rmul__(self, other): return self * other
    def __truediv__(self, other): return self * other**-1
    def __rtruediv__(self, other): return other * self**-1

    def backward(self):
        topo = []
        visited = set()
        def build_topo(v):
            if v not in visited:
                visited.add(v)
                for child in v._children:
                    build_topo(child)
                topo.append(v)
        build_topo(self)
        self.grad = 1
        for v in reversed(topo):
            for child, local_grad in zip(v._children, v._local_grads):
                child.grad += local_grad * v.grad

# Initialize the parameters, to store the knowledge of the model
n_layer = 1     # depth of the transformer neural network (number of layers)
n_embd = 16     # width of the network (embedding dimension)
block_size = 16 # maximum context length of the attention window (note: the longest name is 15 characters)
n_head = 4      # number of attention heads
head_dim = n_embd // n_head # derived dimension of each head
matrix = lambda nout, nin, std=0.08: [[Value(random.gauss(0, std)) for _ in range(nin)] for _ in range(nout)]
state_dict = {'wte': matrix(vocab_size, n_embd), 'wpe': matrix(block_size, n_embd), 'lm_head': matrix(vocab_size, n_embd)}
for i in range(n_layer):
    state_dict[f'layer{i}.attn_wq'] = matrix(n_embd, n_embd)
    state_dict[f'layer{i}.attn_wk'] = matrix(n_embd, n_embd)
    state_dict[f'layer{i}.attn_wv'] = matrix(n_embd, n_embd)
    state_dict[f'layer{i}.attn_wo'] = matrix(n_embd, n_embd)
    state_dict[f'layer{i}.mlp_fc1'] = matrix(4 * n_embd, n_embd)
    state_dict[f'layer{i}.mlp_fc2'] = matrix(n_embd, 4 * n_embd)
params = [p for mat in state_dict.values() for row in mat for p in row] # flatten params into a single list[Value]
print(f"num params: {len(params)}")

# Define the model architecture: a function mapping tokens and parameters to logits over what comes next
# Follow GPT-2, blessed among the GPTs, with minor differences: layernorm -> rmsnorm, no biases, GeLU -> ReLU
def linear(x, w):
    return [sum(wi * xi for wi, xi in zip(wo, x)) for wo in w]

def softmax(logits):
    max_val = max(val.data for val in logits)
    exps = [(val - max_val).exp() for val in logits]
    total = sum(exps)
    return [e / total for e in exps]

def rmsnorm(x):
    ms = sum(xi * xi for xi in x) / len(x)
    scale = (ms + 1e-5) ** -0.5
    return [xi * scale for xi in x]

def gpt(token_id, pos_id, keys, values):
    tok_emb = state_dict['wte'][token_id] # token embedding
    pos_emb = state_dict['wpe'][pos_id] # position embedding
    x = [t + p for t, p in zip(tok_emb, pos_emb)] # joint token and position embedding
    x = rmsnorm(x) # note: not redundant due to backward pass via the residual connection

    for li in range(n_layer):
        # 1) Multi-head Attention block
        x_residual = x
        x = rmsnorm(x)
        q = linear(x, state_dict[f'layer{li}.attn_wq'])
        k = linear(x, state_dict[f'layer{li}.attn_wk'])
        v = linear(x, state_dict[f'layer{li}.attn_wv'])
        keys[li].append(k)
        values[li].append(v)
        x_attn = []
        for h in range(n_head):
            hs = h * head_dim
            q_h = q[hs:hs+head_dim]
            k_h = [ki[hs:hs+head_dim] for ki in keys[li]]
            v_h = [vi[hs:hs+head_dim] for vi in values[li]]
            attn_logits = [sum(q_h[j] * k_h[t][j] for j in range(head_dim)) / head_dim**0.5 for t in range(len(k_h))]
            attn_weights = softmax(attn_logits)
            head_out = [sum(attn_weights[t] * v_h[t][j] for t in range(len(v_h))) for j in range(head_dim)]
            x_attn.extend(head_out)
        x = linear(x_attn, state_dict[f'layer{li}.attn_wo'])
        x = [a + b for a, b in zip(x, x_residual)]
        # 2) MLP block
        x_residual = x
        x = rmsnorm(x)
        x = linear(x, state_dict[f'layer{li}.mlp_fc1'])
        x = [xi.relu() for xi in x]
        x = linear(x, state_dict[f'layer{li}.mlp_fc2'])
        x = [a + b for a, b in zip(x, x_residual)]

    logits = linear(x, state_dict['lm_head'])
    return logits

# Let there be Adam, the blessed optimizer and its buffers
learning_rate, beta1, beta2, eps_adam = 0.01, 0.85, 0.99, 1e-8
m = [0.0] * len(params) # first moment buffer
v = [0.0] * len(params) # second moment buffer

# Repeat in sequence
num_steps = 1000 # number of training steps
for step in range(num_steps):

    # Take single document, tokenize it, surround it with BOS special token on both sides
    doc = docs[step % len(docs)]
    tokens = [BOS] + [uchars.index(ch) for ch in doc] + [BOS]
    n = min(block_size, len(tokens) - 1)

    # Forward the token sequence through the model, building up the computation graph all the way to the loss
    keys, values = [[] for _ in range(n_layer)], [[] for _ in range(n_layer)]
    losses = []
    for pos_id in range(n):
        token_id, target_id = tokens[pos_id], tokens[pos_id + 1]
        logits = gpt(token_id, pos_id, keys, values)
        probs = softmax(logits)
        loss_t = -probs[target_id].log()
        losses.append(loss_t)
    loss = (1 / n) * sum(losses) # final average loss over the document sequence. May yours be low.

    # Backward the loss, calculating the gradients with respect to all model parameters
    loss.backward()

    # Adam optimizer update: update the model parameters based on the corresponding gradients
    lr_t = learning_rate * (1 - step / num_steps) # linear learning rate decay
    for i, p in enumerate(params):
        m[i] = beta1 * m[i] + (1 - beta1) * p.grad
        v[i] = beta2 * v[i] + (1 - beta2) * p.grad ** 2
        m_hat = m[i] / (1 - beta1 ** (step + 1))
        v_hat = v[i] / (1 - beta2 ** (step + 1))
        p.data -= lr_t * m_hat / (v_hat ** 0.5 + eps_adam)
        p.grad = 0

    if step == 0 or (step + 1) % 20 == 0:
        print(f"step {step+1:4d} / {num_steps:4d} | loss {loss.data:.4f}")
    if step % 5 == 0:
        await asyncio.sleep(0)  # 讓出控制權給瀏覽器（更新畫面）；在一般 Python 請拿掉這兩行與 import asyncio

# Inference: may the model babble back to us
temperature = 0.5 # in (0, 1], control the "creativity" of generated text, low to high
print("\\n--- inference (new, hallucinated names) ---")
for sample_idx in range(20):
    keys, values = [[] for _ in range(n_layer)], [[] for _ in range(n_layer)]
    token_id = BOS
    sample = []
    for pos_id in range(block_size):
        logits = gpt(token_id, pos_id, keys, values)
        probs = softmax([l / temperature for l in logits])
        token_id = random.choices(range(vocab_size), weights=[p.data for p in probs])[0]
        if token_id == BOS:
            break
        sample.append(uchars[token_id])
    print(f"sample {sample_idx+1:2d}: {''.join(sample)}")
`,te=`# Matplotlib Demo: Line Plot, Histogram, Scatter Plot
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
`,ae=`# NumPy Basics: Array operations, linear algebra, random numbers
import numpy as np

# Create arrays
a = np.array([1, 2, 3, 4, 5], dtype=float)
b = np.linspace(0, 1, 6)
print("a =", a)
print("b =", b)

# Element-wise operations (vectorized, no loops needed)
print("\\na + 10  =", a + 10)
print("a * b   =", a * b)
print("a ** 2  =", a ** 2)

# 2D matrix
A = np.array([[1, 2], [3, 4]], dtype=float)
B = np.array([[5, 6], [7, 8]], dtype=float)
print("\\nA =\\n", A)
print("A @ B (matmul) =\\n", A @ B)
print("det(A) =", np.linalg.det(A))
print("inv(A) =\\n", np.linalg.inv(A))

# Eigenvalue decomposition
vals, vecs = np.linalg.eig(A)
print("\\neigenvalues of A:", vals)

# Random numbers & statistics
rng = np.random.default_rng(42)
data = rng.normal(loc=0, scale=1, size=10000)
print(f"\\nNormal distribution sample (n=10000)")
print(f"  mean:  {data.mean():.4f}  (expected 0)")
print(f"  std:   {data.std():.4f}  (expected 1)")
print(f"  min:   {data.min():.4f}")
print(f"  max:   {data.max():.4f}")

# Broadcasting
row = np.arange(3)               # shape (3,)
col = np.arange(4).reshape(4, 1) # shape (4,1)
grid = row + col
print("\\nbroadcast add (shape 3 + 4x1):\\n", grid)
`,se=`# Pandas Basics: DataFrame creation, filtering, groupby, pivot
import pandas as pd
import numpy as np

# ── Create DataFrame ─────────────────────────────
rng = np.random.default_rng(42)
n = 30
df = pd.DataFrame({
    "student": [f"S{i:02d}" for i in range(1, n + 1)],
    "math":    rng.integers(50, 100, n),
    "english": rng.integers(50, 100, n),
    "physics": rng.integers(50, 100, n),
    "class":   rng.choice(["A", "B", "C"], n),
})
print("=== First 6 rows ===")
print(df.head(6).to_string(index=False))

# ── Descriptive statistics ───────────────────────
print("\\n=== Descriptive Stats ===")
print(df[["math", "english", "physics"]].describe().round(2))

# ── Add derived columns ──────────────────────────
df["avg"]   = df[["math", "english", "physics"]].mean(axis=1).round(1)
df["grade"] = pd.cut(df["avg"], bins=[0, 60, 70, 80, 90, 100],
                     labels=["E", "D", "C", "B", "A"])

# ── Filter ───────────────────────────────────────
print("\\n=== Students with avg >= 85 ===")
top = df[df["avg"] >= 85].sort_values("avg", ascending=False)
print(top[["student", "class", "math", "english", "physics", "avg"]].to_string(index=False))

# ── GroupBy ──────────────────────────────────────
print("\\n=== Mean scores by class ===")
grp = df.groupby("class")[["math", "english", "physics", "avg"]].mean().round(2)
print(grp)

# ── Grade distribution ───────────────────────────
print("\\n=== Grade distribution ===")
print(df["grade"].value_counts().sort_index())

# ── Pivot table ──────────────────────────────────
print("\\n=== Students per grade per class (pivot) ===")
pivot = pd.crosstab(df["class"], df["grade"])
print(pivot)
`,ie=`# SciPy Demo: Numerical integration, optimization, signal filtering, t-test
import numpy as np
from scipy import integrate, optimize, signal, stats

print("=" * 52)
print("SciPy Scientific Computing Demo")
print("=" * 52)

# ── 1. Numerical integration ─────────────────────
print("\\n[1] Numerical integration (quad)")
f = lambda x: np.exp(-x**2)
result, err = integrate.quad(f, -np.inf, np.inf)
print(f"  integral of e^(-x^2) from -inf to inf = {result:.8f}")
print(f"  expected sqrt(pi) = {np.sqrt(np.pi):.8f}   error < {err:.2e}")

# ── 2. Root finding ──────────────────────────────
print("\\n[2] Root finding (brentq)")
g = lambda x: x**3 - x - 2
root = optimize.brentq(g, 1, 2)
print(f"  x^3 - x - 2 = 0  =>  x = {root:.8f}")
print(f"  check: g({root:.4f}) = {g(root):.2e}")

# ── 3. Unconstrained minimization ────────────────
print("\\n[3] Minimization (BFGS)")
def rosenbrock(xy):
    x, y = xy
    return (1 - x)**2 + 100 * (y - x**2)**2

res = optimize.minimize(rosenbrock, [-1, 0], method="BFGS")
print(f"  Rosenbrock minimum at x={res.x[0]:.6f}, y={res.x[1]:.6f}")
print(f"  min value = {res.fun:.2e}  (theoretical minimum at (1,1) = 0)")

# ── 4. Signal filtering ──────────────────────────
print("\\n[4] Low-pass filter (Butterworth order=4)")
rng = np.random.default_rng(42)
t = np.linspace(0, 1, 500)
clean    = np.sin(2 * np.pi * 5 * t)          # 5 Hz signal
noisy    = clean + 0.5 * rng.standard_normal(len(t))
b, a     = signal.butter(4, 0.1)              # cutoff 0.1
filtered = signal.filtfilt(b, a, noisy)
corr     = np.corrcoef(clean, filtered)[0, 1]
print(f"  correlation(clean, filtered) = {corr:.4f}  (closer to 1 is better)")

# ── 5. Two-sample t-test ─────────────────────────
print("\\n[5] Independent two-sample t-test")
groupA = rng.normal(70, 10, 50)
groupB = rng.normal(75, 10, 50)
t_stat, p_val = stats.ttest_ind(groupA, groupB)
print(f"  Group A mean: {groupA.mean():.2f}   Group B mean: {groupB.mean():.2f}")
print(f"  t = {t_stat:.4f},  p = {p_val:.4f}")
print(f"  => {'Significant difference (p < 0.05)' if p_val < 0.05 else 'No significant difference (p >= 0.05)'}")
`,re=`# Scikit-learn: Iris classification (KNN + Decision Tree) + Linear Regression
import numpy as np
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LinearRegression
from sklearn.metrics import accuracy_score, classification_report, mean_squared_error

print("=" * 55)
print("Scikit-learn: Classification & Regression Demo")
print("=" * 55)

# ── 1. Load Iris dataset ─────────────────────────
iris = datasets.load_iris()
X, y = iris.data, iris.target
names = iris.target_names
print(f"\\n[Dataset] Iris")
print(f"  samples: {X.shape[0]},  features: {X.shape[1]}")
print(f"  classes: {', '.join(names)}")

X_tr, X_te, y_tr, y_te = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y)
scaler   = StandardScaler()
X_tr_s   = scaler.fit_transform(X_tr)
X_te_s   = scaler.transform(X_te)

# ── 2. KNN classifier ────────────────────────────
print("\\n[Classifier 1] K-Nearest Neighbors (k=5)")
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_tr_s, y_tr)
pred_knn = knn.predict(X_te_s)
print(f"  test accuracy: {accuracy_score(y_te, pred_knn):.4f}")
print(classification_report(y_te, pred_knn, target_names=names, zero_division=0))

# ── 3. Decision Tree classifier ──────────────────
print("[Classifier 2] Decision Tree (max_depth=4)")
dt = DecisionTreeClassifier(max_depth=4, random_state=42)
dt.fit(X_tr, y_tr)
pred_dt = dt.predict(X_te)
print(f"  test accuracy: {accuracy_score(y_te, pred_dt):.4f}")
feat_imp = dict(zip(iris.feature_names, dt.feature_importances_))
print("  feature importances:")
for f, v in sorted(feat_imp.items(), key=lambda x: -x[1]):
    bar = "█" * int(v * 30)
    print(f"    {f:26s} {v:.4f}  {bar}")

# ── 4. Linear Regression (Diabetes dataset) ──────
print("\\n[Regression] Linear Regression on Diabetes dataset")
diab = datasets.load_diabetes()
Xd, yd = diab.data, diab.target
Xd_tr, Xd_te, yd_tr, yd_te = train_test_split(Xd, yd, test_size=0.2, random_state=42)
lr = LinearRegression()
lr.fit(Xd_tr, yd_tr)
yd_pred = lr.predict(Xd_te)
rmse    = mean_squared_error(yd_te, yd_pred) ** 0.5
ss_tot  = np.var(yd_te) * len(yd_te)
ss_res  = np.sum((yd_te - yd_pred) ** 2)
r2      = 1 - ss_res / ss_tot
print(f"  R² = {r2:.4f},  RMSE = {rmse:.2f}")
print(f"  First 5 predictions vs actual:")
for p, a in zip(yd_pred[:5], yd_te[:5]):
    print(f"    pred {p:6.1f}   actual {a:6.1f}")
`,oe=Object.assign({"./examples/ai/input.txt":ee,"./examples/ai/microgpt.py":ne,"./examples/matplotlib/matplotlib_plot.py":te,"./examples/numpy/numpy_basic.py":ae,"./examples/pandas/pandas_basic.py":se,"./examples/scipy/scipy_demo.py":ie,"./examples/sklearn/sklearn_iris.py":re}),le=Object.fromEntries(Object.entries(oe).map(([t,n])=>[t.replace("./examples/",""),n]));function de(){const t={};for(const[n,r]of Object.entries(le)){const d=n.indexOf("/");if(d===-1)t[""]??={},t[""][n]=r;else{const c=n.slice(0,d),f=n.slice(d+1);t[c]??={},t[c][f]=r}}return t}const ce={ai:"🤖",numpy:"🔢",pandas:"🐼",matplotlib:"📊",scipy:"🔬",sklearn:"🧠"},pe=t=>ce[t]??"📁",M=t=>t.endsWith(".py")?"🐍":"📄";function W(t,{onOpen:n,isActive:r}){t.innerHTML=`<div class="side-h"><span>檔案總管</span><span>
    <button data-a="new" title="新增檔案">＋</button><button data-a="up" title="上傳檔案">⬆</button></span></div>
    <div class="flist"></div>
    <div class="ex-section">
      <div class="ex-hdr" id="ex-toggle"><span class="ex-arrow">▶</span><span>📚 範例庫</span></div>
      <div class="ex-tree" hidden></div>
    </div>
    <input type="file" multiple hidden>`;const d=t.querySelector(".flist"),c=t.querySelector("#ex-toggle"),f=t.querySelector(".ex-tree"),h=t.querySelector("input[type=file]");let y=null,w=!1;function S(a,e){const s=document.createElement("div");s.className="file editing";const i=document.createElement("input");i.value=a,i.spellcheck=!1;const o=document.createElement("div");o.className="msg",s.append(i,o);let p=!1;const _=v=>{if(p)return;const O=i.value.trim();if(!O||O===a){p=!0,y=null,u();return}const q=y;y=null;try{e(O),p=!0,u()}catch(E){v?(y=q,i.classList.add("bad"),o.textContent=E.message,i.focus()):(p=!0,u())}};return i.onkeydown=v=>{v.key==="Enter"&&_(!0),v.key==="Escape"&&(p=!0,y=null,u())},i.oninput=()=>{i.classList.remove("bad"),o.textContent=""},i.onblur=()=>_(!1),setTimeout(()=>{i.focus();const v=a.lastIndexOf(".");i.setSelectionRange(0,v>0?v:a.length)},0),s}function u(){d.innerHTML="",y&&y.name===void 0&&d.appendChild(S("",a=>n(g.create(a))));for(const a of Object.keys(g.state.files)){if(y?.name===a){d.appendChild(S(a,s=>g.rename(a,s)));continue}const e=document.createElement("div");e.className="file",e.dataset.n=a,e.innerHTML='<span class="nm"></span><span class="acts"><button class="x" data-a="ren" title="重新命名">✎</button><button class="x" data-a="del" title="刪除">✕</button></span>',e.firstChild.textContent=M(a)+" "+a,e.onclick=s=>{const i=s.target.dataset.a;i==="ren"?(y={name:a},u()):i==="del"?confirm(`刪除 ${a}？`)&&g.remove(a):n(a)},e.ondblclick=s=>{s.target.dataset.a||(y={name:a},u())},d.appendChild(e)}C()}const C=()=>d.querySelectorAll(".file[data-n]").forEach(a=>a.classList.toggle("on",r(a.dataset.n)));function x(){f.innerHTML="";const a=de(),e=Object.keys(a).filter(s=>s!=="").sort();a[""]&&e.push("");for(const s of e){const i=a[s];if(s!==""){const o=document.createElement("div");o.className="ex-folder",o.dataset.dir=s,o.innerHTML=`<span class="ex-f-arrow">▶</span><span>${pe(s)} ${s}/</span>`,o.onclick=()=>{o.classList.toggle("open");const _=o.nextElementSibling;_?.classList.contains("ex-folder-body")&&(_.hidden=!_.hidden)},f.appendChild(o);const p=document.createElement("div");p.className="ex-folder-body",p.hidden=!0;for(const[_,v]of Object.entries(i))p.appendChild(k(_,{[_]:v},_));f.appendChild(p)}else for(const[o,p]of Object.entries(i))f.appendChild(k(o,{[o]:p},o))}}function k(a,e,s,i){const o=document.createElement("div");return o.className="ex-file",o.innerHTML=`<span class="nm">${M(a)} ${a}</span><button class="ex-load" title="載入到工作區">載入</button>`,o.querySelector(".ex-load").onclick=p=>{p.stopPropagation(),l(e,s)},o.onclick=p=>{p.target.tagName!=="BUTTON"&&l(e,s)},o}function l(a,e){for(const[s,i]of Object.entries(a))if(s in g.state.files){if(!confirm(`「${s}」已存在，要用範例覆蓋嗎？`))continue;g.setContent(s,i),Y(async()=>{const{modelOf:o}=await import("./files-C0qTJspE.js").then(p=>p.f);return{modelOf:o}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(({modelOf:o})=>{try{o(s).setValue(i)}catch{}})}else g.create(s,i);g.open(e),n(e)}c.onclick=()=>{w=!w,c.classList.toggle("open",w),f.hidden=!w,w&&x()},t.querySelector(".side-h").onclick=a=>{const e=a.target.dataset.a;e==="new"&&(y={},u()),e==="up"&&h.click()},h.onchange=()=>{m([...h.files]),h.value=""},t.ondragover=a=>{a.preventDefault(),t.classList.add("dropping")},t.ondragleave=()=>t.classList.remove("dropping"),t.ondrop=a=>{a.preventDefault(),t.classList.remove("dropping"),m([...a.dataTransfer.files])};async function m(a){let e;for(const s of a){let i=s.name,o=1;for(;i in g.state.files;)i=s.name.replace(/(\.[^.]*)?$/,` (${o++})$1`);e=g.create(i,await s.text())}e&&n(e)}return g.on(a=>a.type==="open"||a.type==="close"?C():u()),u(),{mark:C,render:u}}function fe(t){const n=g.state;t.innerHTML=`
    <nav class="act"><button class="on" title="檔案總管">📁</button></nav>
    <aside class="side" id="v-side"></aside>
    <section class="v-main">
      <div class="tabrow"><div id="v-tabs" class="tabs"></div><button class="run" id="v-run">▶ 執行 (Ctrl+Enter)</button></div>
      <div id="v-ed"></div>
      <div class="panel">
        <div class="ptabs"><button data-p="out" class="on">輸出</button><button data-p="term">終端機</button><button id="v-clr" class="r">清除</button></div>
        <pre id="v-out" class="log"></pre>
        <div id="v-term" hidden><pre id="v-log" class="log"></pre><label class="prompt">&gt;&gt;&gt;<input id="v-in" spellcheck="false" autocomplete="off"></label></div>
      </div>
    </section>
    <footer class="status"><span id="v-st">正在載入 Python…</span><span id="v-pos"></span><span>Python 3 (Pyodide)</span></footer>`;const r=l=>t.querySelector(l),d=r("#v-out"),c=r("#v-log"),f=r("#v-run");W(r("#v-side"),{onOpen:l=>g.open(l),isActive:l=>l===n.active});const h=A.create(r("#v-ed"),{theme:N(),automaticLayout:!0,fontSize:14,minimap:{enabled:!0},tabSize:4,insertSpaces:!0,scrollBeyondLastLine:!1});function y(){const l=r("#v-tabs");l.innerHTML="";for(const m of n.open){const a=document.createElement("div");a.className="tab"+(m===n.active?" on":""),a.innerHTML='<span></span><button class="x" title="關閉">✕</button>',a.firstChild.textContent=m,a.onclick=()=>g.open(m),a.lastChild.onclick=e=>{e.stopPropagation(),g.close(m)},l.appendChild(a)}}function w(){h.setModel(n.active?I(n.active):null),y()}g.on(w),w(),h.onDidChangeCursorPosition(l=>r("#v-pos").textContent=`行 ${l.position.lineNumber}，欄 ${l.position.column}`);const S=(l,m,a)=>{const e=document.createElement("span");a&&(e.className=a),e.textContent=m,l.appendChild(e),l.scrollTop=l.scrollHeight},u=l=>{t.querySelectorAll(".ptabs [data-p]").forEach(m=>m.classList.toggle("on",m.dataset.p===l)),d.hidden=l!=="out",r("#v-term").hidden=l!=="term"};t.querySelectorAll(".ptabs [data-p]").forEach(l=>l.onclick=()=>u(l.dataset.p)),r("#v-clr").onclick=()=>{d.textContent="",c.textContent=""};async function C(){u("out"),d.textContent="";const l=n.active;if(!l?.endsWith(".py")){S(d,`請先選擇一個 .py 檔案再執行。
`,"err");return}f.disabled=!0,r("#v-st").textContent="執行中…";const m=performance.now();await Z(n.files[l],l,{out:(a,e)=>S(d,a,e),err:a=>S(d,a,"err")}),r("#v-st").textContent=`完成（${((performance.now()-m)/1e3).toFixed(2)} 秒）`,f.disabled=!1}f.onclick=C,f.disabled=!0,h.addCommand(D.CtrlCmd|T.Enter,C),h.addCommand(T.F5,C);const x=[];let k=0;r("#v-in").onkeydown=async l=>{const m=l.target;if(l.key==="ArrowUp"&&x.length){k=Math.max(0,k-1),m.value=x[k];return}if(l.key==="ArrowDown"){k=Math.min(x.length,k+1),m.value=x[k]??"";return}if(l.key!=="Enter"||!m.value.trim())return;const a=m.value;m.value="",x.push(a),k=x.length,S(c,">>> "+a+`
`,"dim"),await U(a,{out:(e,s)=>S(c,e,s),err:e=>S(c,e,"err")})},H.then(()=>{f.disabled=!1,r("#v-st").textContent="Python 已就緒"})}const R="py-ide:nb1",j=[{type:"md",src:`# 我的筆記本
雙擊文字儲存格可編輯。**Shift+Enter** 執行並跳到下一格，變數會在儲存格之間保留。`},{type:"code",src:`import math
x = 10
math.sqrt(x)`},{type:"code",src:`# 最後一行的值會自動顯示
x * 2`}],me=t=>t.replace(/[&<>]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[n]);function ue(t){return me(t).replace(/```\w*\n([\s\S]*?)```/g,"<pre>$1</pre>").replace(/^(#{1,4}) (.+)$/gm,(r,d,c)=>`<h${d.length}>${c}</h${d.length}>`).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/`([^`\n]+)`/g,"<code>$1</code>").replace(/^[-*] (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,r=>`<ul>${r}</ul>`).split(/\n{2,}/).map(r=>/^<(h\d|ul|pre)/.test(r)?r:`<p>${r.replace(/\n/g,"<br>")}</p>`).join("")}function _e(t){let n;try{n=JSON.parse(localStorage.getItem(R))||j}catch{n=j}let r=0,d=[],c=Promise.resolve();const f=()=>localStorage.setItem(R,JSON.stringify(n.map(({type:e,src:s})=>({type:e,src:s}))));t.innerHTML=`
    <aside class="side" id="n-side"></aside><div class="nb-main">
    <div class="nb-bar">
      <button data-a="code">＋ 程式碼</button><button data-a="md">＋ 文字</button>
      <button data-a="all">全部執行</button><button data-a="restart">重新啟動執行階段</button>
      <button data-a="clear">清除輸出</button><button data-a="ipynb">下載 .ipynb</button>
      <span id="n-st" class="dim">正在連線至 Python…</span>
    </div>
    <div id="n-cells"></div></div>
    <section class="nb-file" hidden><div class="fh"><span class="fn"></span><span class="dim">貼上或輸入內容會自動儲存</span><button class="fx" title="關閉">✕</button></div><div class="fed"></div></section>`;const h=t.querySelector("#n-cells"),y=t.querySelector("#n-st"),w=e=>h.children[n.indexOf(e)],S=(e,s,i)=>{const o=document.createElement("span");i&&(o.className=i),o.textContent=s,e.querySelector(".co").appendChild(o)};function u(){d.forEach(e=>e.dispose()),d=[],h.innerHTML="",n.forEach((e,s)=>{const i=document.createElement("div");i.className="cell "+e.type,i.innerHTML=`<div class="gut"><button class="go" title="執行 (Ctrl+Enter)">▶</button><small class="cnt">${e.count?`[${e.count}]`:""}</small></div>
        <div class="body"><div class="tools"><button data-a="up">↑</button><button data-a="down">↓</button>
        <button data-a="type">${e.type==="code"?"轉成文字":"轉成程式碼"}</button><button data-a="del">刪除</button></div>
        <div class="ed"></div><div class="mdv"></div><pre class="co log"></pre></div>`,h.appendChild(i);const o=i.querySelector(".ed"),p=i.querySelector(".mdv"),_=A.create(o,{value:e.src,language:e.type==="code"?"python":"markdown",theme:N(),minimap:{enabled:!1},lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:8,scrollBeyondLastLine:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,wordWrap:"on",scrollbar:{vertical:"hidden",alwaysConsumeMouseWheel:!1},fontSize:14,tabSize:4}),v=()=>{o.style.height=Math.max(44,_.getContentHeight())+"px",_.layout()};_.onDidContentSizeChange(v),v(),_.onDidChangeModelContent(()=>{e.src=_.getValue(),f()}),_.addCommand(D.CtrlCmd|T.Enter,()=>C(e)),_.addCommand(D.Shift|T.Enter,async()=>{await C(e);const q=n.indexOf(e);q===n.length-1&&(n.push({type:"code",src:""}),f(),u()),d[q+1]?.focus()}),d.push(_);const O=e.type==="md"&&!e.editing;o.hidden=O,p.hidden=!O,O&&(p.innerHTML=e.src.trim()?ue(e.src):'<p class="dim">（空白文字儲存格，雙擊編輯）</p>',p.ondblclick=()=>{e.editing=!0,u(),d[n.indexOf(e)].focus()}),(e.log||[]).forEach(([q,E])=>S(i,q,E)),i.querySelector(".go").onclick=()=>C(e),i.querySelector(".tools").onclick=q=>{const E=q.target.dataset.a;if(!E)return;const L=n.indexOf(e);E==="del"&&n.splice(L,1),E==="up"&&L>0&&([n[L-1],n[L]]=[n[L],n[L-1]]),E==="down"&&L<n.length-1&&([n[L+1],n[L]]=[n[L],n[L+1]]),E==="type"&&(e.type=e.type==="code"?"md":"code",e.editing=!1,e.log=[]),f(),u()}})}function C(e){return e.type==="md"?(e.editing=!1,u(),Promise.resolve()):c=c.then(async()=>{const s=w(e);if(!s)return;e.log=[],s.querySelector(".co").textContent="",s.classList.add("busy"),s.querySelector(".cnt").textContent="[*]";const i=(p,_)=>{e.log.push([p,_]);const v=w(e);v&&S(v,p,_)};await U(e.src,{out:i,err:p=>i(p,"err")}),e.count=++r;const o=w(e);o&&(o.classList.remove("busy"),o.querySelector(".cnt").textContent=`[${e.count}]`)})}t.querySelector(".nb-bar").onclick=async e=>{const s=e.target.dataset.a;if(s){if((s==="code"||s==="md")&&(n.push({type:s,src:""}),f(),u(),d.at(-1).focus()),s==="all")for(const i of n.slice())await C(i);if(s==="restart"&&(K(),r=0,n.forEach(i=>{i.count=0,i.log=[]}),u()),s==="clear"&&(n.forEach(i=>i.log=[]),u()),s==="ipynb"){const i={cells:n.map(p=>({cell_type:p.type==="code"?"code":"markdown",metadata:{},source:p.src.split(/(?<=\n)/),...p.type==="code"?{outputs:[],execution_count:null}:{}})),metadata:{kernelspec:{name:"python3",display_name:"Python 3",language:"python"},language_info:{name:"python"}},nbformat:4,nbformat_minor:4},o=document.createElement("a");o.href=URL.createObjectURL(new Blob([JSON.stringify(i,null,1)],{type:"application/json"})),o.download="notebook.ipynb",o.click(),URL.revokeObjectURL(o.href)}}};const x=t.querySelector(".nb-file");let k=null,l=null;const m=W(t.querySelector("#n-side"),{onOpen:a,isActive:e=>e===l});function a(e){l=e,x.hidden=!1,x.querySelector(".fn").textContent=e,k??=A.create(x.querySelector(".fed"),{theme:N(),automaticLayout:!0,minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,tabSize:4}),k.setModel(I(e)),m.mark()}x.querySelector(".fx").onclick=()=>{l=null,x.hidden=!0,m.mark()},g.on(e=>{e.name===l&&(e.type==="remove"&&(l=null,x.hidden=!0,m.mark()),e.type==="rename"&&a(e.to))}),u(),H.then(()=>y.textContent="已連線 · Python 3 (Pyodide)")}const z=document.documentElement;fe(document.getElementById("vsc"));_e(document.getElementById("nb"));function J(t){z.dataset.mode=t,localStorage.setItem("py-ide:mode",t),document.querySelectorAll(".seg button").forEach(n=>n.classList.toggle("on",n.dataset.m===t))}document.querySelectorAll(".seg button").forEach(t=>t.onclick=()=>J(t.dataset.m));J(localStorage.getItem("py-ide:mode")||"vscode");z.dataset.theme=localStorage.getItem("py-ide:theme")||"dark";A.setTheme(N());document.getElementById("theme").onclick=()=>{z.dataset.theme=z.dataset.theme==="light"?"dark":"light",localStorage.setItem("py-ide:theme",z.dataset.theme),A.setTheme(N())};
