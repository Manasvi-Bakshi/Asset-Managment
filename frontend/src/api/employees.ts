import { apiGet } from "./http";
import type { ApiResponse } from "@/types/api";
import type { Employee } from "@/types/employee";

export async function fetchEmployees(): Promise<Employee[]> {
  const response = await apiGet<ApiResponse<Employee[]>>("/employees");
  return response.data;
}
