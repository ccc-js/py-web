# SciPy Demo: Numerical integration, optimization, signal filtering, t-test
import numpy as np
from scipy import integrate, optimize, signal, stats

print("=" * 52)
print("SciPy Scientific Computing Demo")
print("=" * 52)

# ── 1. Numerical integration ─────────────────────
print("\n[1] Numerical integration (quad)")
f = lambda x: np.exp(-x**2)
result, err = integrate.quad(f, -np.inf, np.inf)
print(f"  integral of e^(-x^2) from -inf to inf = {result:.8f}")
print(f"  expected sqrt(pi) = {np.sqrt(np.pi):.8f}   error < {err:.2e}")

# ── 2. Root finding ──────────────────────────────
print("\n[2] Root finding (brentq)")
g = lambda x: x**3 - x - 2
root = optimize.brentq(g, 1, 2)
print(f"  x^3 - x - 2 = 0  =>  x = {root:.8f}")
print(f"  check: g({root:.4f}) = {g(root):.2e}")

# ── 3. Unconstrained minimization ────────────────
print("\n[3] Minimization (BFGS)")
def rosenbrock(xy):
    x, y = xy
    return (1 - x)**2 + 100 * (y - x**2)**2

res = optimize.minimize(rosenbrock, [-1, 0], method="BFGS")
print(f"  Rosenbrock minimum at x={res.x[0]:.6f}, y={res.x[1]:.6f}")
print(f"  min value = {res.fun:.2e}  (theoretical minimum at (1,1) = 0)")

# ── 4. Signal filtering ──────────────────────────
print("\n[4] Low-pass filter (Butterworth order=4)")
rng = np.random.default_rng(42)
t = np.linspace(0, 1, 500)
clean    = np.sin(2 * np.pi * 5 * t)          # 5 Hz signal
noisy    = clean + 0.5 * rng.standard_normal(len(t))
b, a     = signal.butter(4, 0.1)              # cutoff 0.1
filtered = signal.filtfilt(b, a, noisy)
corr     = np.corrcoef(clean, filtered)[0, 1]
print(f"  correlation(clean, filtered) = {corr:.4f}  (closer to 1 is better)")

# ── 5. Two-sample t-test ─────────────────────────
print("\n[5] Independent two-sample t-test")
groupA = rng.normal(70, 10, 50)
groupB = rng.normal(75, 10, 50)
t_stat, p_val = stats.ttest_ind(groupA, groupB)
print(f"  Group A mean: {groupA.mean():.2f}   Group B mean: {groupB.mean():.2f}")
print(f"  t = {t_stat:.4f},  p = {p_val:.4f}")
print(f"  => {'Significant difference (p < 0.05)' if p_val < 0.05 else 'No significant difference (p >= 0.05)'}")
