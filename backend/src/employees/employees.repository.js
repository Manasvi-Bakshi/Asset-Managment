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

export async function getEmployeeByEuid(euid) {
  const { rows } = await pool.query(
    `
    SELECT *
    FROM employees
    WHERE euid = $1
    LIMIT 1
    `,
    [euid]
  );

  return rows[0] || null;
}

export async function getAssetsForEmployee(euid) {
  const { rows } = await pool.query(
    `
    SELECT a.*
    FROM assets a
    JOIN asset_assignments aa ON aa.asset_id = a.id
    JOIN employees e ON e.id = aa.employee_id
    WHERE e.euid = $1
      AND aa.status = 'ACTIVE'
    `,
    [euid]
  );

  return rows;
}

export async function getAttendanceForEmployee(euid) {
  const { rows } = await pool.query(
    `
    SELECT ad.*
    FROM attendance_daily ad
    JOIN employees e ON e.id = ad.employee_id
    WHERE e.euid = $1
    ORDER BY ad.attendance_date DESC
    `,
    [euid]
  );

  return rows;
}

