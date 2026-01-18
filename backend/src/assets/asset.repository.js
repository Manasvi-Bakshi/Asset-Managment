import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const assetsFilePath = path.join(__dirname, "assets.json")

export async function getAllAssets() {
  const data = await fs.promises.readFile(assetsFilePath, "utf-8")
  return JSON.parse(data)
}
