var express = require("express");
const app = express();
const cors = require('cors');
var mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const port = process.env.PORT;
const url = 'https://pract-3.netlify.app' || 'https://pract-3.netlify.app' || "http://localhost:5000";
const corsOptions = {
    origin: url,
    credentials: true,
};
app.use(cors(corsOptions));
require("./db/connection");
app.use(express.json());
app.use(require("./routes/auth"));
app.listen(port, () => console.log(`Listening on port ${port}`));

