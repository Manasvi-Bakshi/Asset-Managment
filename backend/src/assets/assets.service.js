import { getAllAssets } from "./asset.repository.js"

export async function listAssets() {
  return await getAllAssets()
}
