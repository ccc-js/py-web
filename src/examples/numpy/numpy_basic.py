# NumPy Basics: Array operations, linear algebra, random numbers
import numpy as np

# Create arrays
a = np.array([1, 2, 3, 4, 5], dtype=float)
b = np.linspace(0, 1, 6)
print("a =", a)
print("b =", b)

# Element-wise operations (vectorized, no loops needed)
print("\na + 10  =", a + 10)
print("a * b   =", a * b)
print("a ** 2  =", a ** 2)

# 2D matrix
A = np.array([[1, 2], [3, 4]], dtype=float)
B = np.array([[5, 6], [7, 8]], dtype=float)
print("\nA =\n", A)
print("A @ B (matmul) =\n", A @ B)
print("det(A) =", np.linalg.det(A))
print("inv(A) =\n", np.linalg.inv(A))

# Eigenvalue decomposition
vals, vecs = np.linalg.eig(A)
print("\neigenvalues of A:", vals)

# Random numbers & statistics
rng = np.random.default_rng(42)
data = rng.normal(loc=0, scale=1, size=10000)
print(f"\nNormal distribution sample (n=10000)")
print(f"  mean:  {data.mean():.4f}  (expected 0)")
print(f"  std:   {data.std():.4f}  (expected 1)")
print(f"  min:   {data.min():.4f}")
print(f"  max:   {data.max():.4f}")

# Broadcasting
row = np.arange(3)               # shape (3,)
col = np.arange(4).reshape(4, 1) # shape (4,1)
grid = row + col
print("\nbroadcast add (shape 3 + 4x1):\n", grid)
