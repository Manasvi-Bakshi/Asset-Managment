import streamlit as st
import pandas as pd

st.set_page_config(page_title="Motherboard Health Monitor")

st.title("💻 Laptop Motherboard Health Monitoring")
st.write("📂 Upload the dataset")

# =========================
# DATASET UPLOAD
# =========================
uploaded_file = st.file_uploader(
    "Upload Laptop_Motherboard_Health_Monitoring_Dataset.csv",
    type=["csv"]
)

if uploaded_file is None:
    st.warning("⚠ Please upload the dataset to continue")
    st.stop()

# Read dataset
df = pd.read_csv(uploaded_file)

st.subheader("📊 Uploaded Dataset Preview")
st.dataframe(df)

# =========================
# SELECT RECORD
# =========================
st.subheader("🔎 Select System Record")

row_index = st.slider(
    "Select row number",
    min_value=0,
    max_value=len(df) - 1,
    value=0
)

row = df.iloc[row_index]

# =========================
# DISPLAY VALUES
# =========================
st.subheader("🧠 System Parameters")

cpu = row["CPUUsage"]
ram = row["RAMUsage"]
temp = row["Temperature"]
voltage = row["Voltage"]
disk = row["DiskUsage"]
fan = row["FanSpeed"]

st.write(f"CPU Usage: {cpu}%")
st.write(f"RAM Usage: {ram}%")
st.write(f"Temperature: {temp} °C")
st.write(f"Voltage: {voltage} V")
st.write(f"Disk Usage: {disk}%")
st.write(f"Fan Speed: {fan} RPM")

# =========================
# RULE-BASED HEALTH CHECK
# =========================
def detect_problem(cpu, ram, temp, voltage, disk, fan):
    if temp > 90:
        return "Overheating"
    elif voltage < 10.5 or voltage > 13.5:
        return "Power Issue"
    elif disk > 90:
        return "Disk Failure"
    elif ram > 85 and cpu < 50:
        return "Memory Leak"
    else:
        return "No Problem"

# =========================
# PREDICTION
# =========================
if st.button("Predict Health Status"):
    predicted = detect_problem(cpu, ram, temp, voltage, disk, fan)
    actual = row["ProblemDetected"]

    st.subheader("🔍 Result")
    st.success(f"Predicted Status: {predicted}")
    st.info(f"Actual Status (from dataset): {actual}")
 

