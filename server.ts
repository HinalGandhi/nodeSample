var express = require("express");
const app = express();
const cors = require('cors');
var mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const port = process.env.PORT;
app.use(cors());
require("./db/connection");
app.use(express.json());
app.use(require("./routes/auth"));
app.listen(port, () => console.log(`Listening on port ${port}`));

