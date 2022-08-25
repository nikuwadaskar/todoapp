const express = require("express");
const port = 8000;
const path = require("path");

const db = require("./config/mongoose");
const Data = require("./models/data");
const app = express();

app.use(express.urlencoded());
app.use(express.static("assets"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  Data.find({}, function (err, data) {
    if (err) {
      console.log("err is fetching contact from db ");
      return;
    }
    return res.render("Home", {
      title: "My To Do list",
      data_1: data,
    });
  });
});

app.post("/update-data", function (req, res) {
  Data.create(
    {
      category: req.body.category,
      date: req.body.date,
      text: req.body.text,
    },
    function (err, newdata) {
      if (err) {
        console.log("errro in creating contact!");
        return;
      }
      return res.redirect("back");
    }
  );
});

app.get("/delete-contact/", function (req, res) {
  let id = req.query.id;
  Data.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log(err, "error in delete");
    }
    return res.redirect("back");
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server ", err);
  }
  console.log("yepp! my express is running on port ", port);
});
