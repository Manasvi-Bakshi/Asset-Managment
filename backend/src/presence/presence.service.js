import pool from "../shared/db/pg.client.js";
import {
  insertPresenceEvent,
  getOfficeLocation,
  getActiveAssignment,
  getAttendanceForDate,
  createAttendance,
  updateAttendanceExit,
  updateAttendanceEntry,
  getEventDateIST
} from "./presence.repository.js";

export async function processPresenceEvent(data) {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const event = await insertPresenceEvent(data);

    const officeLocation = await getOfficeLocation(event.location_id);
    if (!officeLocation) {
      await client.query("COMMIT");
      return { message: "Not an office location. Attendance not processed." };
    }

    const assignment = await getActiveAssignment(event.asset_id);
    if (!assignment) {
      await client.query("COMMIT");
      return { message: "No active assignment found. Attendance not processed." };
    }

    const employee_id = assignment.employee_id;
    const eventDate = await getEventDateIST(event.event_time);

    const existingAttendance =
      await getAttendanceForDate(employee_id, eventDate);

    if (event.event_type === "ENTER") {
      if (!existingAttendance) {
        await createAttendance(employee_id, eventDate, event.event_time);
      } else {
        await updateAttendanceEntry(
          existingAttendance.id,
          event.event_time
        );
      }
    }

    if (event.event_type === "EXIT") {
      if (existingAttendance) {
        await updateAttendanceExit(
          existingAttendance.id,
          event.event_time
        );
      }
    }

    await client.query("COMMIT");
    return { message: "Presence processed successfully." };

  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}
