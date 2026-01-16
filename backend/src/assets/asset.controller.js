const assetService = require("./assets.service")

async function getAssets(req, res){
    try {
        const assets = await assetService.listAssets()
        res.json(assets)
    }
    catch(error) {
        console.error(error)
        res.status(500).json({message:"Failed to fetch assets"})
    }
}

module.exports = {
    getAssets
}