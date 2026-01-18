import { listEmployees } from "./employees.service.js";

export async function getEmployees(req, res) {
  try {
    const employees = await listEmployees();
    res.json({ success: true, data: employees });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to fetch employees" });
  }
}
