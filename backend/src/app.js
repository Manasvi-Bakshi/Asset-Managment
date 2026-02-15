import express from "express"
import cors from "cors"
import { getAssets } from "./assets/assets.controller.js"
import { getEmployees } from "./employees/employees.controller.js"
import { login } from "./auth/auth.controller.js"
import { listEmployees } from "./employees/employees.service.js";
import { listAssets } from "./assets/assets.service.js";

const app = express()

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json())

app.get("/health", (req, res) => {
  res.send("API is running")
})

app.post("/auth/login", login)
app.get("/assets", getAssets)
app.get("/employees", getEmployees)
app.get("/reports/summary", async (req, res) => {
  try {
    const employees = await listEmployees();
    const assets = await listAssets();

    const available = assets.filter(a => a.status === "AVAILABLE").length;
    const deployed = assets.filter(a => a.status === "DEPLOYED").length;
    const maintenance = assets.filter(a => a.status === "MAINTENANCE").length;

    res.json({
      success: true,
      data: {
        totalEmployees: employees.length,
        totalAssets: assets.length,
        availableAssets: available,
        deployedAssets: deployed,
        maintenanceAssets: maintenance
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to generate report" });
  }
});

export default app