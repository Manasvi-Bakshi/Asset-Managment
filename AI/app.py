import streamlit as st
import pandas as pd
import joblib
import numpy as np

# ---------------- LOAD DATASET ----------------
df = pd.read_csv("Laptop_Motherboard_Health_Monitoring_Dataset.csv")

# ---------------- LOAD MODEL ----------------
model = joblib.load("device_health_model.pkl")
scaler = joblib.load("scaler.pkl")
le = joblib.load("label_encoder.pkl")

st.set_page_config(page_title="ST Employee Portal", layout="wide")

st.markdown("<h2 style='color:#1f4e79;'>ST Employee Portal</h2>", unsafe_allow_html=True)
st.markdown("### Device Health Dashboard")

st.markdown("---")

# ---------------- SELECT DEVICE ----------------
device_index = st.selectbox("Select Device Record", df.index)

device = df.loc[device_index]

# Extract attributes from dataset
cpu_usage = device["CPUUsage"]
ram_usage = device["RAMUsage"]
temperature = device["Temperature"]
voltage = device["Voltage"]
disk_usage = device["DiskUsage"]
fan_speed = device["FanSpeed"]

# ---------------- ML PREDICTION ----------------
input_data = np.array([[cpu_usage, ram_usage,
                        temperature, voltage,
                        disk_usage, fan_speed]])

scaled = scaler.transform(input_data)
prediction = model.predict(scaled)
predicted_status = le.inverse_transform(prediction)[0]

# ---------------- DERIVED METRICS ----------------
cpu_performance = 100 - cpu_usage
ram_health = 100 - ram_usage
storage_available = 100 - disk_usage

if predicted_status == "No Problem":
    overall_health = 90
    health_label = "Healthy"
    color = "green"
elif "Failure" in predicted_status or "Overheat" in predicted_status:
    overall_health = 55
    health_label = "Warning"
    color = "orange"
else:
    overall_health = 35
    health_label = "Critical"
    color = "red"

# ---------------- DASHBOARD CARDS ----------------
st.markdown("## Device Summary")

c1, c2, c3, c4 = st.columns(4)

c1.metric("RAM Health", f"{ram_health}%")
c2.metric("CPU Performance", f"{cpu_performance}%")
c3.metric("Storage Available", f"{storage_available}%")
c4.metric("Overall Health", f"{overall_health}%")

st.markdown(f"<h3 style='color:{color};'>Status: {health_label}</h3>", unsafe_allow_html=True)

st.markdown("---")

# ---------------- DETAIL SECTION ----------------
st.markdown("### System Details")

d1, d2 = st.columns(2)

with d1:
    st.write("CPU Usage:", cpu_usage, "%")
    st.write("Temperature:", temperature, "°C")
    st.write("Voltage:", voltage, "V")

with d2:
    st.write("RAM Usage:", ram_usage, "%")
    st.write("Disk Usage:", disk_usage, "%")
    st.write("Fan Speed:", fan_speed, "RPM")
    st.write("Actual Problem Detected:", device["ProblemDetected"])
    st.write("Predicted Problem:", predicted_status)
