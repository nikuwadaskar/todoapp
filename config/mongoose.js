// first we require mongoose
const mongoose = require("mongoose");

//then we connect to the database
mongoose.connect("mongodb://localhost/data_todo");

const db = mongoose.connection;

// look for nay error
db.on("error", console.error.bind(console, "error connceting to db"));

// if up and runing thenprint the message
db.once("open", function () {
  console.log("successfully connected to data base");
});
