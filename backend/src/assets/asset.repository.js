import pool from "../shared/db/pg.client.js"

export async function getAllAssets() {
  const query = `
    SELECT
      id,
      asset_code,
      asset_type,
      company,
      model,
      serial_number,
      asset_tag,
      purchase_date,
      warranty_expiry_date,
      status,
      created_at,
      updated_at
    FROM assets
    ORDER BY created_at DESC
  `
  const { rows } = await pool.query(query)
  return rows
}
