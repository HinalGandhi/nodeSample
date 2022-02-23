var express = require("express");
var app = express();
var cors = require('cors');
var mongoose = require("mongoose");
var dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
var port = process.env.PORT;
var corsOptions = {
    origin: ['https://dreamy-aryabhata-c5efd5.netlify.app/', 'http://localhost:3000/', 'https://pract-3.netlify.app'],
    credentials: true
};
app.use(cors(corsOptions));
require("./db/connection");
app.use(express.json());
app.use(require("./routes/auth"));
app.listen(port, function () { return console.log("Listening on port ".concat(port)); });
