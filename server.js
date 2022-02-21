var express = require("express");
var app = express();
var mongoose = require("mongoose");
var dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
var port = process.env.PORT;
require("./db/connection");
app.use(express.json());
app.use(require("./routes/auth"));
app.listen(port, function () { return console.log("Listening on port ".concat(port)); })
