var mongoose = require('mongoose');
var DB = "mongodb+srv://Hinal:hinalgandhi@myapp.e2jiu.mongodb.net/To-Do?retryWrites=true&w=majority";
mongoose
  .connect( "mongodb+srv://Hinal:hinalgandhi@myapp.e2jiu.mongodb.net/To-Do?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log("no connection", err));
 