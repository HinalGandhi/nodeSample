var mongoose = require('mongoose');
var DB = "mongodb+srv://Hinal:hinalgandhi@myapp.e2jiu.mongodb.net/To-Do?retryWrites=true&w=majority";
mongoose
    .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(function () { return console.log("Connection successful"); })["catch"](function (err) { return console.log("no connection", err); });
