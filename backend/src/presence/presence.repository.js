import pool from "../shared/db/pg.client.js";

export async function insertPresenceEvent(data) {
  const { asset_id, location_id, event_type, source } = data;

  const { rows } = await pool.query(
    `
    INSERT INTO asset_presence_events (
      asset_id,
      location_id,
      event_type,
      source
    )
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [asset_id, location_id, event_type, source]
  );

  return rows[0];
}

export async function getOfficeLocation(location_id) {
  const { rows } = await pool.query(
    `
    SELECT *
    FROM locations
    WHERE id = $1
      AND is_office = true
    `,
    [location_id]
  );

  return rows[0] || null;
}

export async function getActiveAssignment(asset_id) {
  const { rows } = await pool.query(
    `
    SELECT aa.*, e.id AS employee_id
    FROM asset_assignments aa
    JOIN employees e ON e.id = aa.employee_id
    WHERE aa.asset_id = $1
      AND aa.status = 'ACTIVE'
    `,
    [asset_id]
  );

  return rows[0] || null;
}

export async function getAttendanceForDate(employee_id, date) {
  const { rows } = await pool.query(
    `
    SELECT *
    FROM attendance_daily
    WHERE employee_id = $1
      AND attendance_date = $2
    `,
    [employee_id, date]
  );

  return rows[0] || null;
}

export async function createAttendance(employee_id, date, entry_time) {
  const { rows } = await pool.query(
    `
    INSERT INTO attendance_daily (
      employee_id,
      attendance_date,
      first_entry_time,
      status
    )
    VALUES ($1, $2, $3, 'PRESENT')
    RETURNING *
    `,
    [employee_id, date, entry_time]
  );

  return rows[0];
}

export async function updateAttendanceExit(record_id, exit_time) {
  const { rows } = await pool.query(
    `
    UPDATE attendance_daily
    SET last_exit_time = $1,
        total_duration_minutes =
          EXTRACT(EPOCH FROM ($1 - first_entry_time)) / 60
    WHERE id = $2
    RETURNING *
    `,
    [exit_time, record_id]
  );

  return rows[0];
}
