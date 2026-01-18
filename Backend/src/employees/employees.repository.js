import pool from "../shared/db/pg.client.js";

export async function getAllEmployees() {
  const result = await pool.query(`
    SELECT
      id,
      euid,
      first_name,
      last_name,
      email,
      department,
      designation,
      is_active,
      created_at
    FROM employees
    ORDER BY created_at DESC
  `);

  return result.rows;
}
