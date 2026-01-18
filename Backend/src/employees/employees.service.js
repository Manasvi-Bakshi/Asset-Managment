import { getAllEmployees } from "./employees.repository.js";

export async function listEmployees() {
  return await getAllEmployees();
}
