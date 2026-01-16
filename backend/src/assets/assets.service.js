const assetRepository = require("./asset.repository")

async function listAssets() {
    return await assetRepository.getAllAssets()
}

module.exports = {
    listAssets
}