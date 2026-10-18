"""小型神經網路套件：純 Python 自動微分、Transformer 與 Adam。"""

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
