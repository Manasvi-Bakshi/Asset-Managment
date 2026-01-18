import pool from "../shared/db/pg.client.js"

export async function getAllEmployees() {
  const query = `
    SELECT
      id,
      euid,
      first_name,
      last_name,
      email,
      department,
      designation,
      location_id,
      is_active,
      created_at,
      updated_at
    FROM employees
    ORDER BY created_at DESC
  `
  const { rows } = await pool.query(query)
  return rows
}
