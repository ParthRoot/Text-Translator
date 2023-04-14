const express = require("express");

let app = express.Router();

let controll = require("../models/controll");

app.post("/", async(req, res) => {
    let data = await controll.translateString(req.body);
    res.send(data);
    // res.render("index");
});

module.exports = app;