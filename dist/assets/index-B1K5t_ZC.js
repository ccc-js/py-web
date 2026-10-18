const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./files-C0qTJspE.js","./editor.api-C-xGocuI.js","./preload-helper-Ct5FWWRu.js","./editor-CP2cXDiA.css","./monaco.contribution-z6V7X9uP.js","./files-oVf4fuzy.css"])))=>i.map(i=>d[i]);
import{s as h,t as O,m as I}from"./files-C0qTJspE.js";import{L as M}from"./core-qH_pqHwH-C9_6Qe8-.js";import{_ as Z}from"./preload-helper-Ct5FWWRu.js";import{e as B,K as F,a as A}from"./editor.api-C-xGocuI.js";import"./monaco.contribution-z6V7X9uP.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))d(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function i(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(c){if(c.ep)return;c.ep=!0;const p=i(c);fetch(c.href,p)}})();let b=null,N={out(){},err(){}};const E="/home/pyodide",ee=`
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
    for m in [m for m, v in sys.modules.items() if str(getattr(v, '__file__', '') or '').startswith('${E}/')]:
        del sys.modules[m]
`,H=new Promise(t=>{const n=d=>{b=d.interpreter,b.setStdout({batched:c=>N.out(c+`
`)}),b.setStderr({batched:c=>N.err(c+`
`)}),b.setStdin({stdin:()=>prompt("Python 輸入：")??""}),b.runPython(ee),t()},i=M.main.onReady;typeof i?.add=="function"?i.add(n):M.main.onReady=n});let $=new Set;function X(){const t=h.state.files;for(const n of $)if(!(n in t))try{b.FS.unlink(`${E}/${n}`)}catch{}$=new Set;for(const[n,i]of Object.entries(t)){const d=`${E}/${n}`;try{b.FS.mkdirTree(d.slice(0,d.lastIndexOf("/")))}catch{}b.FS.writeFile(d,i),$.add(n)}b.runPython(`import sys, os, importlib
os.chdir("${E}")
if "${E}" not in sys.path: sys.path.insert(0, "${E}")
importlib.invalidate_caches()`)}function G(){for(const t of Object.keys(h.state.files))try{h.update(t,b.FS.readFile(`${E}/${t}`,{encoding:"utf8"}))}catch{}}function U(t){const n=String(t.message??t).trimEnd(),i=n.indexOf('File "<exec>"');return(i>0?`Traceback (most recent call last):
  `+n.slice(i):n)+`
`}const K=()=>b.runPython("_nb_reset()");async function W(t,n){N=n;try{X(),await b.loadPackagesFromImports(t),await b.runPythonAsync(b.globals.get("_nb_prep")(t));const i=b.globals.get("_nb_show")();i!=null&&n.out(i+`
`,"res")}catch(i){n.err(U(i))}finally{G()}}async function ne(t,n,i){N=i;try{K(),X(),await b.loadPackagesFromImports(t),await b.runPythonAsync(t,{filename:`${E}/${n}`})}catch(d){i.err(U(d))}finally{G()}}const te=`小貓坐在桌上
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
`,ae=`"""
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
`,se=`# Matplotlib Demo: Line Plot, Histogram, Scatter Plot
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
`,re=`"""使用 NumPy tensor 版 nn 訓練字元級 GPT；請由範例庫載入。"""

import asyncio
import os
import random
import numpy as np
import nn

random.seed(42)
if not os.path.exists('input.txt'):
    raise FileNotFoundError('找不到 input.txt；請從範例庫載入 nn-gpt.py。')

docs = [line.strip() for line in open('input.txt', encoding='utf-8') if line.strip()]
chars = sorted(set(''.join(docs)))
token_of = {char: index for index, char in enumerate(chars)}
BOS = len(chars)
vocab_size, block_size = BOS + 1, 16

model = nn.GPT(vocab_size, block_size, width=24)
optimizer = nn.Adam(model.parameters)
num_parameters = sum(parameter.size for parameter in model.parameters.values())
print(f'訓練資料：{len(docs)} 行，詞彙表：{vocab_size} 個字元，模型參數：{num_parameters}')

num_steps = 1500
for step in range(num_steps):
    doc = docs[step % len(docs)]
    sequence = [BOS] + [token_of[char] for char in doc] + [BOS]
    tokens = np.array(sequence[:-1][:block_size])
    targets = np.array(sequence[1:][:block_size])
    loss, gradients = model.loss_and_gradients(tokens, targets)
    optimizer.step(gradients, 0.02 * (1 - step / num_steps) + 0.001)

    if step == 0 or (step + 1) % 150 == 0:
        print(f'步驟 {step + 1:4d} / {num_steps}，損失 {loss:.4f}')
    if step % 25 == 0:
        await asyncio.sleep(0)  # 瀏覽器中讓出控制權，保持介面可更新。

print('\\n--- 生成的句子（NumPy tensor 版） ---')
for sample_index in range(12):
    token_ids, sample = [BOS], []
    for _ in range(block_size):
        logits = model.forward(token_ids)[-1] / 0.6
        probabilities = np.exp(logits - logits.max())
        probabilities /= probabilities.sum()
        token_id = random.choices(range(vocab_size), weights=probabilities)[0]
        if token_id == BOS:
            break
        sample.append(chars[token_id])
        token_ids.append(token_id)
    print(f'{sample_index + 1:2d}. {"".join(sample)}')
`,ie=`"""NumPy tensor 版的極簡 GPT：手寫矩陣反向傳播，不建立純量運算圖。"""

import numpy as np


def _softmax(values):
    shifted = values - values.max(axis=-1, keepdims=True)
    exps = np.exp(shifted)
    return exps / exps.sum(axis=-1, keepdims=True)


class Adam:
    def __init__(self, parameters, beta1=0.9, beta2=0.99, epsilon=1e-8):
        self.parameters = parameters
        self.beta1, self.beta2, self.epsilon = beta1, beta2, epsilon
        self.first = {name: np.zeros_like(value) for name, value in parameters.items()}
        self.second = {name: np.zeros_like(value) for name, value in parameters.items()}
        self.steps = 0

    def step(self, gradients, learning_rate):
        self.steps += 1
        for name, parameter in self.parameters.items():
            self.first[name] = self.beta1 * self.first[name] + (1 - self.beta1) * gradients[name]
            self.second[name] = self.beta2 * self.second[name] + (1 - self.beta2) * gradients[name] ** 2
            first = self.first[name] / (1 - self.beta1 ** self.steps)
            second = self.second[name] / (1 - self.beta2 ** self.steps)
            parameter -= learning_rate * first / (np.sqrt(second) + self.epsilon)


class GPT:
    """單層、單頭的 causal Transformer，所有權重梯度皆以 tensor 計算。"""

    def __init__(self, vocab_size, block_size, width=24, seed=42):
        self.block_size = block_size
        self.width = width
        rng = np.random.default_rng(seed)
        normal = lambda *shape: rng.normal(0, 0.08, shape)
        self.parameters = {
            'wte': normal(vocab_size, width),
            'wpe': normal(block_size, width),
            'wq': normal(width, width),
            'wk': normal(width, width),
            'wv': normal(width, width),
            'wo': normal(width, width),
            'w1': normal(width, 4 * width),
            'w2': normal(4 * width, width),
            'lm_head': normal(width, vocab_size),
        }

    def forward(self, token_ids, keep_cache=False):
        """輸入 shape (T,)，輸出每個位置的下一個字元 logits，shape (T, V)。"""
        p = self.parameters
        token_ids = np.asarray(token_ids, dtype=np.int64)
        length = len(token_ids)
        if length > self.block_size:
            raise ValueError(f'序列長度不可超過 block_size={self.block_size}')

        x = p['wte'][token_ids] + p['wpe'][:length]
        q, k, v = x @ p['wq'], x @ p['wk'], x @ p['wv']
        scores = q @ k.T / np.sqrt(self.width)
        future = np.triu(np.ones((length, length), dtype=bool), k=1)
        scores[future] = -1e9
        attention = _softmax(scores)
        attended = attention @ v
        x2 = x + attended @ p['wo']
        pre_activation = x2 @ p['w1']
        hidden = np.maximum(pre_activation, 0)
        x3 = x2 + hidden @ p['w2']
        logits = x3 @ p['lm_head']

        if not keep_cache:
            return logits
        return logits, (token_ids, x, q, k, v, future, attention, attended,
                        x2, pre_activation, hidden, x3)

    def loss_and_gradients(self, token_ids, targets):
        """交叉熵損失與全部參數的解析梯度。"""
        p = self.parameters
        logits, cache = self.forward(token_ids, keep_cache=True)
        token_ids, x, q, k, v, future, attention, attended, x2, pre, hidden, x3 = cache
        targets = np.asarray(targets, dtype=np.int64)
        length = len(token_ids)

        probabilities = _softmax(logits)
        loss = -np.log(probabilities[np.arange(length), targets] + 1e-12).mean()
        d_logits = probabilities.copy()
        d_logits[np.arange(length), targets] -= 1
        d_logits /= length
        gradients = {name: np.zeros_like(value) for name, value in p.items()}

        gradients['lm_head'] = x3.T @ d_logits
        d_x3 = d_logits @ p['lm_head'].T

        d_x2 = d_x3.copy()  # MLP 殘差連接
        gradients['w2'] = hidden.T @ d_x3
        d_hidden = d_x3 @ p['w2'].T
        d_pre = d_hidden * (pre > 0)
        gradients['w1'] = x2.T @ d_pre
        d_x2 += d_pre @ p['w1'].T

        d_x = d_x2.copy()  # attention 殘差連接
        gradients['wo'] = attended.T @ d_x2
        d_attended = d_x2 @ p['wo'].T
        d_attention = d_attended @ v.T
        d_v = attention.T @ d_attended
        # softmax Jacobian-vector product，逐列計算即可。
        d_scores = attention * (d_attention - (d_attention * attention).sum(axis=1, keepdims=True))
        d_scores[future] = 0
        scale = 1 / np.sqrt(self.width)
        d_q = d_scores @ k * scale
        d_k = d_scores.T @ q * scale
        gradients['wq'] = x.T @ d_q
        gradients['wk'] = x.T @ d_k
        gradients['wv'] = x.T @ d_v
        d_x += d_q @ p['wq'].T + d_k @ p['wk'].T + d_v @ p['wv'].T

        np.add.at(gradients['wte'], token_ids, d_x)
        gradients['wpe'][:length] += d_x
        return float(loss), gradients
`,oe=`"""用 nn 小型套件訓練字元級 GPT；請和 nn.py、input.txt 一起載入。"""

import asyncio
import os
import random
import nn

random.seed(42)

if not os.path.exists('input.txt'):
    raise FileNotFoundError('找不到 input.txt；請從範例庫載入 nn-gpt.py。')

docs = [line.strip() for line in open('input.txt', encoding='utf-8') if line.strip()]
random.shuffle(docs)
chars = sorted(set(''.join(docs)))
token_of = {char: index for index, char in enumerate(chars)}
BOS = len(chars)
vocab_size = BOS + 1
block_size = 16

print(f'訓練資料：{len(docs)} 行，詞彙表：{vocab_size} 個字元')
model = nn.GPT(vocab_size, block_size, width=12, layers=1, heads=3)
optimizer = nn.Adam(model.parameters())
print(f'模型參數：{len(model.parameters())}')

num_steps = 200
for step in range(num_steps):
    doc = docs[step % len(docs)]
    tokens = [BOS] + [token_of[char] for char in doc] + [BOS]
    length = min(block_size, len(tokens) - 1)
    keys = [[] for _ in model.blocks]
    values = [[] for _ in model.blocks]
    losses = []

    for position in range(length):
        logits = model(tokens[position], position, keys, values)
        probabilities = nn.softmax(logits)
        losses.append(-probabilities[tokens[position + 1]].log())

    loss = sum(losses) / length
    loss.backward()
    optimizer.step(0.01 * (1 - step / num_steps))

    if step == 0 or (step + 1) % 50 == 0:
        print(f'步驟 {step + 1:3d} / {num_steps}，損失 {loss.data:.4f}')
    if step % 5 == 0:
        await asyncio.sleep(0)  # 瀏覽器中讓出控制權，保持介面可更新。

print('\\n--- 生成的句子 ---')
for sample_index in range(12):
    keys = [[] for _ in model.blocks]
    values = [[] for _ in model.blocks]
    token_id, sample = BOS, []
    for position in range(block_size):
        logits = model(token_id, position, keys, values)
        probabilities = nn.softmax([logit / 0.6 for logit in logits])
        token_id = random.choices(range(vocab_size), weights=[item.data for item in probabilities])[0]
        if token_id == BOS:
            break
        sample.append(chars[token_id])
    print(f'{sample_index + 1:2d}. {"".join(sample)}')
`,le=`"""小型神經網路套件：純 Python 自動微分、Transformer 與 Adam。"""

import math
import random


class Value:
    """可建立運算圖、並以反向傳播累積梯度的純量。"""

    __slots__ = ('data', 'grad', '_children', '_local_grads')

    def __init__(self, data, children=(), local_grads=()):
        self.data = data
        self.grad = 0.0
        self._children = children
        self._local_grads = local_grads

    def __add__(self, other):
        other = other if isinstance(other, Value) else Value(other)
        return Value(self.data + other.data, (self, other), (1.0, 1.0))

    def __mul__(self, other):
        other = other if isinstance(other, Value) else Value(other)
        return Value(self.data * other.data, (self, other), (other.data, self.data))

    def __pow__(self, power):
        return Value(self.data ** power, (self,), (power * self.data ** (power - 1),))

    def log(self):
        return Value(math.log(self.data), (self,), (1 / self.data,))

    def exp(self):
        result = math.exp(self.data)
        return Value(result, (self,), (result,))

    def relu(self):
        return Value(max(0.0, self.data), (self,), (float(self.data > 0),))

    def __neg__(self): return self * -1
    def __radd__(self, other): return self + other
    def __sub__(self, other): return self + (-other)
    def __rsub__(self, other): return other + (-self)
    def __rmul__(self, other): return self * other
    def __truediv__(self, other): return self * other ** -1
    def __rtruediv__(self, other): return other * self ** -1

    def backward(self):
        order, visited = [], set()

        def visit(node):
            if node not in visited:
                visited.add(node)
                for child in node._children:
                    visit(child)
                order.append(node)

        visit(self)
        self.grad = 1.0
        for node in reversed(order):
            for child, local_grad in zip(node._children, node._local_grads):
                child.grad += local_grad * node.grad


def _matrix(rows, cols, std=0.08):
    return [[Value(random.gauss(0, std)) for _ in range(cols)] for _ in range(rows)]


def _parameters(matrix):
    return [parameter for row in matrix for parameter in row]


def softmax(logits):
    maximum = max(value.data for value in logits)
    exps = [(value - maximum).exp() for value in logits]
    total = sum(exps)
    return [value / total for value in exps]


class Embedding:
    def __init__(self, count, width):
        self.weight = _matrix(count, width)

    def __call__(self, index):
        return self.weight[index]

    def parameters(self):
        return _parameters(self.weight)


class Linear:
    def __init__(self, inputs, outputs):
        self.weight = _matrix(outputs, inputs)

    def __call__(self, vector):
        return [sum(weight * value for weight, value in zip(row, vector)) for row in self.weight]

    def parameters(self):
        return _parameters(self.weight)


def rmsnorm(vector):
    mean_square = sum(value * value for value in vector) / len(vector)
    scale = (mean_square + 1e-5) ** -0.5
    return [value * scale for value in vector]


class TransformerBlock:
    """沒有偏置、採 RMSNorm 與 ReLU 的極簡 GPT 區塊。"""

    def __init__(self, width, heads):
        if width % heads:
            raise ValueError('width 必須可被 heads 整除')
        self.heads = heads
        self.head_width = width // heads
        self.query = Linear(width, width)
        self.key = Linear(width, width)
        self.value = Linear(width, width)
        self.output = Linear(width, width)
        self.fc1 = Linear(width, 4 * width)
        self.fc2 = Linear(4 * width, width)

    def __call__(self, vector, keys, values):
        residual = vector
        normalized = rmsnorm(vector)
        query = self.query(normalized)
        keys.append(self.key(normalized))
        values.append(self.value(normalized))
        attended = []
        for head in range(self.heads):
            start = head * self.head_width
            stop = start + self.head_width
            q = query[start:stop]
            k = [item[start:stop] for item in keys]
            v = [item[start:stop] for item in values]
            scores = [sum(q[i] * key[i] for i in range(self.head_width)) / self.head_width ** 0.5 for key in k]
            weights = softmax(scores)
            attended.extend(sum(weights[t] * v[t][i] for t in range(len(v))) for i in range(self.head_width))
        vector = [left + right for left, right in zip(self.output(attended), residual)]
        residual = vector
        vector = [value.relu() for value in self.fc1(rmsnorm(vector))]
        return [left + right for left, right in zip(self.fc2(vector), residual)]

    def parameters(self):
        return sum((layer.parameters() for layer in (self.query, self.key, self.value, self.output, self.fc1, self.fc2)), [])


class GPT:
    def __init__(self, vocab_size, block_size, width=12, layers=1, heads=3):
        self.token_embedding = Embedding(vocab_size, width)
        self.position_embedding = Embedding(block_size, width)
        self.blocks = [TransformerBlock(width, heads) for _ in range(layers)]
        self.language_head = Linear(width, vocab_size)

    def __call__(self, token_id, position_id, keys, values):
        vector = [token + position for token, position in zip(
            self.token_embedding(token_id), self.position_embedding(position_id))]
        vector = rmsnorm(vector)
        for block, layer_keys, layer_values in zip(self.blocks, keys, values):
            vector = block(vector, layer_keys, layer_values)
        return self.language_head(vector)

    def parameters(self):
        return (self.token_embedding.parameters() + self.position_embedding.parameters() +
                sum((block.parameters() for block in self.blocks), []) + self.language_head.parameters())


class Adam:
    def __init__(self, parameters, beta1=0.85, beta2=0.99, epsilon=1e-8):
        self.parameters = parameters
        self.beta1, self.beta2, self.epsilon = beta1, beta2, epsilon
        self.first = [0.0] * len(parameters)
        self.second = [0.0] * len(parameters)
        self.steps = 0

    def step(self, learning_rate):
        self.steps += 1
        for i, parameter in enumerate(self.parameters):
            self.first[i] = self.beta1 * self.first[i] + (1 - self.beta1) * parameter.grad
            self.second[i] = self.beta2 * self.second[i] + (1 - self.beta2) * parameter.grad ** 2
            first = self.first[i] / (1 - self.beta1 ** self.steps)
            second = self.second[i] / (1 - self.beta2 ** self.steps)
            parameter.data -= learning_rate * first / (second ** 0.5 + self.epsilon)
            parameter.grad = 0.0
`,de=`# NumPy Basics: Array operations, linear algebra, random numbers
import numpy as np

# Create arrays
a = np.array([1, 2, 3, 4, 5], dtype=float)
b = np.linspace(0, 1, 5)
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
`,ce=`# Pandas Basics: DataFrame creation, filtering, groupby, pivot
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
`,pe=`# SciPy Demo: Numerical integration, optimization, signal filtering, t-test
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
`,fe=`# Scikit-learn: Iris classification (KNN + Decision Tree) + Linear Regression
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
`,me=Object.assign({"./examples/ai/input.txt":te,"./examples/ai/microgpt.py":ae,"./examples/matplotlib/matplotlib_plot.py":se,"./examples/nn-numpy/nn-gpt.py":re,"./examples/nn-numpy/nn.py":ie,"./examples/nn/nn-gpt.py":oe,"./examples/nn/nn.py":le,"./examples/numpy/numpy_basic.py":de,"./examples/pandas/pandas_basic.py":ce,"./examples/scipy/scipy_demo.py":pe,"./examples/sklearn/sklearn_iris.py":fe}),J=Object.fromEntries(Object.entries(me).map(([t,n])=>[t.replace("./examples/",""),n])),ue={"ai/microgpt.py":["ai/microgpt.py","ai/input.txt"],"nn/nn-gpt.py":["nn/nn-gpt.py","nn/nn.py","ai/input.txt"],"nn-numpy/nn-gpt.py":["nn-numpy/nn-gpt.py","nn-numpy/nn.py","ai/input.txt"]};function D(t){const n=ue[t]??[t];return Object.fromEntries(n.map(i=>[i.slice(i.lastIndexOf("/")+1),J[i]]))}function _e(){const t={};for(const[n,i]of Object.entries(J)){const d=n.indexOf("/");if(d===-1)t[""]??={},t[""][n]=i;else{const c=n.slice(0,d),p=n.slice(d+1);t[c]??={},t[c][p]=i}}return t}const he={ai:"🤖",nn:"🧠","nn-numpy":"⚡",numpy:"🔢",pandas:"🐼",matplotlib:"📊",scipy:"🔬",sklearn:"🧠"},ge=t=>he[t]??"📁",j=t=>t.endsWith(".py")?"🐍":"📄";function Y(t,{onOpen:n,isActive:i}){t.innerHTML=`<div class="side-h"><span>檔案總管</span><span>
    <button data-a="new" title="新增檔案">＋</button><button data-a="up" title="上傳檔案">⬆</button></span></div>
    <div class="flist"></div>
    <div class="ex-section">
      <div class="ex-hdr" id="ex-toggle"><span class="ex-arrow">▶</span><span>📚 範例庫</span></div>
      <div class="ex-tree" hidden></div>
    </div>
    <input type="file" multiple hidden>`;const d=t.querySelector(".flist"),c=t.querySelector("#ex-toggle"),p=t.querySelector(".ex-tree"),g=t.querySelector("input[type=file]");let y=null,w=!1;function S(a,e){const s=document.createElement("div");s.className="file editing";const r=document.createElement("input");r.value=a,r.spellcheck=!1;const o=document.createElement("div");o.className="msg",s.append(r,o);let f=!1;const _=v=>{if(f)return;const C=r.value.trim();if(!C||C===a){f=!0,y=null,u();return}const q=y;y=null;try{e(C),f=!0,u()}catch(T){v?(y=q,r.classList.add("bad"),o.textContent=T.message,r.focus()):(f=!0,u())}};return r.onkeydown=v=>{v.key==="Enter"&&_(!0),v.key==="Escape"&&(f=!0,y=null,u())},r.oninput=()=>{r.classList.remove("bad"),o.textContent=""},r.onblur=()=>_(!1),setTimeout(()=>{r.focus();const v=a.lastIndexOf(".");r.setSelectionRange(0,v>0?v:a.length)},0),s}function u(){d.innerHTML="",y&&y.name===void 0&&d.appendChild(S("",a=>n(h.create(a))));for(const a of Object.keys(h.state.files)){if(y?.name===a){d.appendChild(S(a,s=>h.rename(a,s)));continue}const e=document.createElement("div");e.className="file",e.dataset.n=a,e.innerHTML='<span class="nm"></span><span class="acts"><button class="x" data-a="ren" title="重新命名">✎</button><button class="x" data-a="del" title="刪除">✕</button></span>',e.firstChild.textContent=j(a)+" "+a,e.onclick=s=>{const r=s.target.dataset.a;r==="ren"?(y={name:a},u()):r==="del"?confirm(`刪除 ${a}？`)&&h.remove(a):n(a)},e.ondblclick=s=>{s.target.dataset.a||(y={name:a},u())},d.appendChild(e)}z()}const z=()=>d.querySelectorAll(".file[data-n]").forEach(a=>a.classList.toggle("on",i(a.dataset.n)));function x(){p.innerHTML="";const a=_e(),e=Object.keys(a).filter(s=>s!=="").sort();a[""]&&e.push("");for(const s of e){const r=a[s];if(s!==""){const o=document.createElement("div");o.className="ex-folder",o.dataset.dir=s,o.innerHTML=`<span class="ex-f-arrow">▶</span><span>${ge(s)} ${s}/</span>`,o.onclick=()=>{o.classList.toggle("open");const _=o.nextElementSibling;_?.classList.contains("ex-folder-body")&&(_.hidden=!_.hidden)},p.appendChild(o);const f=document.createElement("div");f.className="ex-folder-body",f.hidden=!0;for(const[_,v]of Object.entries(r))f.appendChild(k(_,D(`${s}/${_}`),_));p.appendChild(f)}else for(const[o,f]of Object.entries(r))p.appendChild(k(o,D(o),o))}}function k(a,e,s,r){const o=document.createElement("div");return o.className="ex-file",o.innerHTML=`<span class="nm">${j(a)} ${a}</span><button class="ex-load" title="載入到工作區">載入</button>`,o.querySelector(".ex-load").onclick=f=>{f.stopPropagation(),l(e,s)},o.onclick=f=>{f.target.tagName!=="BUTTON"&&l(e,s)},o}function l(a,e){for(const[s,r]of Object.entries(a))if(s in h.state.files){if(!confirm(`「${s}」已存在，要用範例覆蓋嗎？`))continue;h.setContent(s,r),Z(async()=>{const{modelOf:o}=await import("./files-C0qTJspE.js").then(f=>f.f);return{modelOf:o}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(({modelOf:o})=>{try{o(s).setValue(r)}catch{}})}else h.create(s,r);h.open(e),n(e)}c.onclick=()=>{w=!w,c.classList.toggle("open",w),p.hidden=!w,w&&x()},t.querySelector(".side-h").onclick=a=>{const e=a.target.dataset.a;e==="new"&&(y={},u()),e==="up"&&g.click()},g.onchange=()=>{m([...g.files]),g.value=""},t.ondragover=a=>{a.preventDefault(),t.classList.add("dropping")},t.ondragleave=()=>t.classList.remove("dropping"),t.ondrop=a=>{a.preventDefault(),t.classList.remove("dropping"),m([...a.dataTransfer.files])};async function m(a){let e;for(const s of a){let r=s.name,o=1;for(;r in h.state.files;)r=s.name.replace(/(\.[^.]*)?$/,` (${o++})$1`);e=h.create(r,await s.text())}e&&n(e)}return h.on(a=>a.type==="open"||a.type==="close"?z():u()),u(),{mark:z,render:u}}function be(t){const n=h.state;t.innerHTML=`
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
    <footer class="status"><span id="v-st">正在載入 Python…</span><span id="v-pos"></span><span>Python 3 (Pyodide)</span></footer>`;const i=l=>t.querySelector(l),d=i("#v-out"),c=i("#v-log"),p=i("#v-run");Y(i("#v-side"),{onOpen:l=>h.open(l),isActive:l=>l===n.active});const g=B.create(i("#v-ed"),{theme:O(),automaticLayout:!0,fontSize:14,minimap:{enabled:!0},tabSize:4,insertSpaces:!0,scrollBeyondLastLine:!1});function y(){const l=i("#v-tabs");l.innerHTML="";for(const m of n.open){const a=document.createElement("div");a.className="tab"+(m===n.active?" on":""),a.innerHTML='<span></span><button class="x" title="關閉">✕</button>',a.firstChild.textContent=m,a.onclick=()=>h.open(m),a.lastChild.onclick=e=>{e.stopPropagation(),h.close(m)},l.appendChild(a)}}function w(){g.setModel(n.active?I(n.active):null),y()}h.on(w),w(),g.onDidChangeCursorPosition(l=>i("#v-pos").textContent=`行 ${l.position.lineNumber}，欄 ${l.position.column}`);const S=(l,m,a)=>{const e=document.createElement("span");a&&(e.className=a),e.textContent=m,l.appendChild(e),l.scrollTop=l.scrollHeight},u=l=>{t.querySelectorAll(".ptabs [data-p]").forEach(m=>m.classList.toggle("on",m.dataset.p===l)),d.hidden=l!=="out",i("#v-term").hidden=l!=="term"};t.querySelectorAll(".ptabs [data-p]").forEach(l=>l.onclick=()=>u(l.dataset.p)),i("#v-clr").onclick=()=>{d.textContent="",c.textContent=""};async function z(){u("out"),d.textContent="";const l=n.active;if(!l?.endsWith(".py")){S(d,`請先選擇一個 .py 檔案再執行。
`,"err");return}p.disabled=!0,i("#v-st").textContent="執行中…";const m=performance.now();await ne(n.files[l],l,{out:(a,e)=>S(d,a,e),err:a=>S(d,a,"err")}),i("#v-st").textContent=`完成（${((performance.now()-m)/1e3).toFixed(2)} 秒）`,p.disabled=!1}p.onclick=z,p.disabled=!0,g.addCommand(F.CtrlCmd|A.Enter,z),g.addCommand(A.F5,z);const x=[];let k=0;i("#v-in").onkeydown=async l=>{const m=l.target;if(l.key==="ArrowUp"&&x.length){k=Math.max(0,k-1),m.value=x[k];return}if(l.key==="ArrowDown"){k=Math.min(x.length,k+1),m.value=x[k]??"";return}if(l.key!=="Enter"||!m.value.trim())return;const a=m.value;m.value="",x.push(a),k=x.length,S(c,">>> "+a+`
`,"dim"),await W(a,{out:(e,s)=>S(c,e,s),err:e=>S(c,e,"err")})},H.then(()=>{p.disabled=!1,i("#v-st").textContent="Python 已就緒"})}const R="py-ide:nb1",V=[{type:"md",src:`# 我的筆記本
雙擊文字儲存格可編輯。**Shift+Enter** 執行並跳到下一格，變數會在儲存格之間保留。`},{type:"code",src:`import math
x = 10
math.sqrt(x)`},{type:"code",src:`# 最後一行的值會自動顯示
x * 2`}],ye=t=>t.replace(/[&<>]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[n]);function xe(t){return ye(t).replace(/```\w*\n([\s\S]*?)```/g,"<pre>$1</pre>").replace(/^(#{1,4}) (.+)$/gm,(i,d,c)=>`<h${d.length}>${c}</h${d.length}>`).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/`([^`\n]+)`/g,"<code>$1</code>").replace(/^[-*] (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,i=>`<ul>${i}</ul>`).split(/\n{2,}/).map(i=>/^<(h\d|ul|pre)/.test(i)?i:`<p>${i.replace(/\n/g,"<br>")}</p>`).join("")}function ve(t){let n;try{n=JSON.parse(localStorage.getItem(R))||V}catch{n=V}let i=0,d=[],c=Promise.resolve();const p=()=>localStorage.setItem(R,JSON.stringify(n.map(({type:e,src:s})=>({type:e,src:s}))));t.innerHTML=`
    <aside class="side" id="n-side"></aside><div class="nb-main">
    <div class="nb-bar">
      <button data-a="code">＋ 程式碼</button><button data-a="md">＋ 文字</button>
      <button data-a="all">全部執行</button><button data-a="restart">重新啟動執行階段</button>
      <button data-a="clear">清除輸出</button><button data-a="ipynb">下載 .ipynb</button>
      <span id="n-st" class="dim">正在連線至 Python…</span>
    </div>
    <div id="n-cells"></div></div>
    <section class="nb-file" hidden><div class="fh"><span class="fn"></span><span class="dim">貼上或輸入內容會自動儲存</span><button class="fx" title="關閉">✕</button></div><div class="fed"></div></section>`;const g=t.querySelector("#n-cells"),y=t.querySelector("#n-st"),w=e=>g.children[n.indexOf(e)],S=(e,s,r)=>{const o=document.createElement("span");r&&(o.className=r),o.textContent=s,e.querySelector(".co").appendChild(o)};function u(){d.forEach(e=>e.dispose()),d=[],g.innerHTML="",n.forEach((e,s)=>{const r=document.createElement("div");r.className="cell "+e.type,r.innerHTML=`<div class="gut"><button class="go" title="執行 (Ctrl+Enter)">▶</button><small class="cnt">${e.count?`[${e.count}]`:""}</small></div>
        <div class="body"><div class="tools"><button data-a="up">↑</button><button data-a="down">↓</button>
        <button data-a="type">${e.type==="code"?"轉成文字":"轉成程式碼"}</button><button data-a="del">刪除</button></div>
        <div class="ed"></div><div class="mdv"></div><pre class="co log"></pre></div>`,g.appendChild(r);const o=r.querySelector(".ed"),f=r.querySelector(".mdv"),_=B.create(o,{value:e.src,language:e.type==="code"?"python":"markdown",theme:O(),minimap:{enabled:!1},lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:8,scrollBeyondLastLine:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,wordWrap:"on",scrollbar:{vertical:"hidden",alwaysConsumeMouseWheel:!1},fontSize:14,tabSize:4}),v=()=>{o.style.height=Math.max(44,_.getContentHeight())+"px",_.layout()};_.onDidContentSizeChange(v),v(),_.onDidChangeModelContent(()=>{e.src=_.getValue(),p()}),_.addCommand(F.CtrlCmd|A.Enter,()=>z(e)),_.addCommand(F.Shift|A.Enter,async()=>{await z(e);const q=n.indexOf(e);q===n.length-1&&(n.push({type:"code",src:""}),p(),u()),d[q+1]?.focus()}),d.push(_);const C=e.type==="md"&&!e.editing;o.hidden=C,f.hidden=!C,C&&(f.innerHTML=e.src.trim()?xe(e.src):'<p class="dim">（空白文字儲存格，雙擊編輯）</p>',f.ondblclick=()=>{e.editing=!0,u(),d[n.indexOf(e)].focus()}),(e.log||[]).forEach(([q,T])=>S(r,q,T)),r.querySelector(".go").onclick=()=>z(e),r.querySelector(".tools").onclick=q=>{const T=q.target.dataset.a;if(!T)return;const L=n.indexOf(e);T==="del"&&n.splice(L,1),T==="up"&&L>0&&([n[L-1],n[L]]=[n[L],n[L-1]]),T==="down"&&L<n.length-1&&([n[L+1],n[L]]=[n[L],n[L+1]]),T==="type"&&(e.type=e.type==="code"?"md":"code",e.editing=!1,e.log=[]),p(),u()}})}function z(e){return e.type==="md"?(e.editing=!1,u(),Promise.resolve()):c=c.then(async()=>{const s=w(e);if(!s)return;e.log=[],s.querySelector(".co").textContent="",s.classList.add("busy"),s.querySelector(".cnt").textContent="[*]";const r=(f,_)=>{e.log.push([f,_]);const v=w(e);v&&S(v,f,_)};await W(e.src,{out:r,err:f=>r(f,"err")}),e.count=++i;const o=w(e);o&&(o.classList.remove("busy"),o.querySelector(".cnt").textContent=`[${e.count}]`)})}t.querySelector(".nb-bar").onclick=async e=>{const s=e.target.dataset.a;if(s){if((s==="code"||s==="md")&&(n.push({type:s,src:""}),p(),u(),d.at(-1).focus()),s==="all")for(const r of n.slice())await z(r);if(s==="restart"&&(K(),i=0,n.forEach(r=>{r.count=0,r.log=[]}),u()),s==="clear"&&(n.forEach(r=>r.log=[]),u()),s==="ipynb"){const r={cells:n.map(f=>({cell_type:f.type==="code"?"code":"markdown",metadata:{},source:f.src.split(/(?<=\n)/),...f.type==="code"?{outputs:[],execution_count:null}:{}})),metadata:{kernelspec:{name:"python3",display_name:"Python 3",language:"python"},language_info:{name:"python"}},nbformat:4,nbformat_minor:4},o=document.createElement("a");o.href=URL.createObjectURL(new Blob([JSON.stringify(r,null,1)],{type:"application/json"})),o.download="notebook.ipynb",o.click(),URL.revokeObjectURL(o.href)}}};const x=t.querySelector(".nb-file");let k=null,l=null;const m=Y(t.querySelector("#n-side"),{onOpen:a,isActive:e=>e===l});function a(e){l=e,x.hidden=!1,x.querySelector(".fn").textContent=e,k??=B.create(x.querySelector(".fed"),{theme:O(),automaticLayout:!0,minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,tabSize:4}),k.setModel(I(e)),m.mark()}x.querySelector(".fx").onclick=()=>{l=null,x.hidden=!0,m.mark()},h.on(e=>{e.name===l&&(e.type==="remove"&&(l=null,x.hidden=!0,m.mark()),e.type==="rename"&&a(e.to))}),u(),H.then(()=>y.textContent="已連線 · Python 3 (Pyodide)")}const P=document.documentElement;be(document.getElementById("vsc"));ve(document.getElementById("nb"));function Q(t){P.dataset.mode=t,localStorage.setItem("py-ide:mode",t),document.querySelectorAll(".seg button").forEach(n=>n.classList.toggle("on",n.dataset.m===t))}document.querySelectorAll(".seg button").forEach(t=>t.onclick=()=>Q(t.dataset.m));Q(localStorage.getItem("py-ide:mode")||"vscode");P.dataset.theme=localStorage.getItem("py-ide:theme")||"dark";B.setTheme(O());document.getElementById("theme").onclick=()=>{P.dataset.theme=P.dataset.theme==="light"?"dark":"light",localStorage.setItem("py-ide:theme",P.dataset.theme),B.setTheme(O())};
