
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
import joblib

# 1️⃣ Load Dataset
df = pd.read_csv("Laptop_Motherboard_Health_Monitoring_Dataset.csv")

# 2️⃣ Drop unnecessary column
df = df.drop("ModelName", axis=1)

# 3️⃣ Encode target column
le = LabelEncoder()
df["ProblemDetected"] = le.fit_transform(df["ProblemDetected"])

# 4️⃣ Define Features & Target
X = df.drop("ProblemDetected", axis=1)
y = df["ProblemDetected"]

# 5️⃣ Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 6️⃣ Scale Features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# 7️⃣ Train Model
model = RandomForestClassifier(n_estimators=200, random_state=42)
model.fit(X_train, y_train)

# 8️⃣ Save Files (.pkl)
joblib.dump(model, "device_health_model.pkl")
joblib.dump(scaler, "scaler.pkl")
joblib.dump(le, "label_encoder.pkl")

print("✅ Model trained and .pkl files created successfully!")

# Accuracy

from sklearn.metrics import accuracy_score, classification_report, confusion_matrix


y_pred = model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print(f"\n Model Accuracy: {accuracy:.4f}")
print("\n Classification Report:")
print(classification_report(y_test, y_pred, target_names=le.classes_))
