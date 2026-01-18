import { getAllAssets } from "./assets.repository.js"

export async function listAssets() {
  return await getAllAssets()
}
