const express = require("express");
let app = express.Router();
var fs = require('fs');

app.get("/", async(req, res) => {
    let langJson = await JSON.parse(fs.readFileSync("lang.json"));
    res.send(langJson);
})

module.exports = app;