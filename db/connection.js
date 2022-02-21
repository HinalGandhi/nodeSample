var mongoose = require('mongoose');
var DB = process.env.DATABASE;
mongoose
    .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(function () { return console.log("Connection successful"); })["catch"](function (err) { return console.log("no connection", err); });
