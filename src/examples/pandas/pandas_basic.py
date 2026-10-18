# Pandas Basics: DataFrame creation, filtering, groupby, pivot
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
print("\n=== Descriptive Stats ===")
print(df[["math", "english", "physics"]].describe().round(2))

# ── Add derived columns ──────────────────────────
df["avg"]   = df[["math", "english", "physics"]].mean(axis=1).round(1)
df["grade"] = pd.cut(df["avg"], bins=[0, 60, 70, 80, 90, 100],
                     labels=["E", "D", "C", "B", "A"])

# ── Filter ───────────────────────────────────────
print("\n=== Students with avg >= 85 ===")
top = df[df["avg"] >= 85].sort_values("avg", ascending=False)
print(top[["student", "class", "math", "english", "physics", "avg"]].to_string(index=False))

# ── GroupBy ──────────────────────────────────────
print("\n=== Mean scores by class ===")
grp = df.groupby("class")[["math", "english", "physics", "avg"]].mean().round(2)
print(grp)

# ── Grade distribution ───────────────────────────
print("\n=== Grade distribution ===")
print(df["grade"].value_counts().sort_index())

# ── Pivot table ──────────────────────────────────
print("\n=== Students per grade per class (pivot) ===")
pivot = pd.crosstab(df["class"], df["grade"])
print(pivot)
