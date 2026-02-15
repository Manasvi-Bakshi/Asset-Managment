import {
  listEmployees,
  findEmployeeByEuid,
  listAssetsForEmployee,
  listAttendanceForEmployee
} from "./employees.service.js"


export async function getEmployees(req, res) {
  try {
    const employees = await listEmployees()
    res.json({ success: true, data: employees })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: "Failed to fetch employees" })
  }
}

export async function getEmployeeByEuidController(req, res) {
  try {
    const { euid } = req.params

    const employee = await findEmployeeByEuid(euid)

    if (!employee) {
      return res.status(404).json({ success: false, message: "Employee not found" })
    }

    res.json({ success: true, data: employee })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: "Failed to fetch employee" })
  }
}

export async function getEmployeeAssets(req, res) {
  try {
    const { euid } = req.params

    const assets = await listAssetsForEmployee(euid)

    res.json({ success: true, data: assets })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: "Failed to fetch employee assets" })
  }
}

export async function getEmployeeAttendance(req, res) {
  try {
    const { euid } = req.params

    const attendance = await listAttendanceForEmployee(euid)

    res.json({ success: true, data: attendance })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: "Failed to fetch attendance" })
  }
}
