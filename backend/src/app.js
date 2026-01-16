const express = require("express")
const app = express()
const assetController = require("./assets/asset.controller")

app.use(express.json())

app.get("/health",(req,res)=>{
    res.send("API is running")
})

app.get("/assets", assetController.getAssets)

module.exports = app 