//use express module
const express = require("express");
const app = express();

app.use(express.json());

const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const path = require("path");

const port = 8000;

const translate = require("./Routes/translate");

const home = require("./Routes/home")
const getParam = require("./Routes/getParam");

// important for pass data from frontend to backnd
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const static_path = path.join(__dirname, "./public");
app.use(express.static(static_path));
app.use(cookie());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.json());

app.use("/", home);
app.use("/translate", translate);
app.use("/getParam", getParam);


app.listen(port, () => {
    console.log("Server Running on: ", port);
});