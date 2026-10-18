"""用 nn 小型套件訓練字元級 GPT；請和 nn.py、input.txt 一起載入。"""

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

print('\n--- 生成的句子 ---')
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
