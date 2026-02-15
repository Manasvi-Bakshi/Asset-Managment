import {
  getAllEmployees,
  getEmployeeByEuid,
  getAssetsForEmployee,
  getAttendanceForEmployee
} from "./employees.repository.js"

export async function listEmployees() {
  return getAllEmployees()
}

export async function findEmployeeByEuid(euid) {
  return getEmployeeByEuid(euid)
}

export async function listAssetsForEmployee(euid) {
  return getAssetsForEmployee(euid)
}

export async function listAttendanceForEmployee(euid) {
  return getAttendanceForEmployee(euid)
}
