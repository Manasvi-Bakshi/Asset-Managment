import express from "express"
import cors from "cors"
import { getAssets } from "./assets/assets.controller.js"
import { getEmployees } from "./employees/employees.controller.js"
import { login } from "./auth/auth.controller.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/health", (req, res) => {
  res.send("API is running")
})

app.post("/auth/login", login)
app.get("/assets", getAssets)
app.get("/employees", getEmployees)

export default app