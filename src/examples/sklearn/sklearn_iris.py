# Scikit-learn: Iris classification (KNN + Decision Tree) + Linear Regression
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
print(f"\n[Dataset] Iris")
print(f"  samples: {X.shape[0]},  features: {X.shape[1]}")
print(f"  classes: {', '.join(names)}")

X_tr, X_te, y_tr, y_te = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y)
scaler   = StandardScaler()
X_tr_s   = scaler.fit_transform(X_tr)
X_te_s   = scaler.transform(X_te)

# ── 2. KNN classifier ────────────────────────────
print("\n[Classifier 1] K-Nearest Neighbors (k=5)")
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
print("\n[Regression] Linear Regression on Diabetes dataset")
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
