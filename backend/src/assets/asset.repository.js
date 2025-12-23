const pool = require("../shared/db/pg.client")

async function getAllAssets(){
    const result = await pool.query("SELECT * FROM assets")
    return result.rows
}

module.exports = {
    getAllAssets
}