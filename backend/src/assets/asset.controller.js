import { listAssets } from "./assets.service.js"

export async function getAssets(req, res) {
  try {
    const assets = await listAssets()
    res.json({success:true, data:assets})
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Failed to fetch assets" })
  }
}
