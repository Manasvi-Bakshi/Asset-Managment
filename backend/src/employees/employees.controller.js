import { listEmployees } from "./employees.service.js"

export async function getEmployees(req, res) {
  try {
    const employees = await listEmployees()
    res.json({ success: true, data: employees })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: "Failed to fetch employees" })
  }
}
