var express = require("express");
const app = express();
const cors = require('cors');
var mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const port = process.env.PORT;
const corsOptions = {
    origin: ['https://dreamy-aryabhata-c5efd5.netlify.app/','http://localhost:3000/','https://pract-3.netlify.app'],
    credentials: true,
};
app.use(cors(corsOptions));
require("./db/connection");
app.use(express.json());
app.use(require("./routes/auth"));
app.listen(port, () => console.log(`Listening on port ${port}`));

