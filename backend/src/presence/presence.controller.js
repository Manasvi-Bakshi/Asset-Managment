import { processPresenceEvent } from "./presence.service.js";

export async function postPresenceEvent(req, res) {
  try {
    const result = await processPresenceEvent(req.body);

    res.json({ success: true, message: result.message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Presence processing failed" });
  }
}
