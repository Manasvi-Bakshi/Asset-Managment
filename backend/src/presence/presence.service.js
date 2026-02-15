import {
  insertPresenceEvent,
  getOfficeLocation,
  getActiveAssignment,
  getAttendanceForDate,
  createAttendance,
  updateAttendanceExit
} from "./presence.repository.js";

export async function processPresenceEvent(data) {
  const event = await insertPresenceEvent(data);

  const officeLocation = await getOfficeLocation(event.location_id);
  if (!officeLocation) {
    return { message: "Not an office location. Attendance not processed." };
  }

  const assignment = await getActiveAssignment(event.asset_id);
  if (!assignment) {
    return { message: "No active assignment found. Attendance not processed." };
  }

  const employee_id = assignment.employee_id;
  const eventDate = event.event_time.toISOString().split("T")[0];

  const existingAttendance = await getAttendanceForDate(employee_id, eventDate);

  if (event.event_type === "ENTER") {
    if (!existingAttendance) {
      await createAttendance(employee_id, eventDate, event.event_time);
    }
  }

  if (event.event_type === "EXIT") {
    if (existingAttendance) {
      await updateAttendanceExit(existingAttendance.id, event.event_time);
    }
  }

  return { message: "Presence processed successfully." };
}
