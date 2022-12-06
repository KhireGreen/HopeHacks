const express = require("express");

const mysql = require("mysql");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "Rajone",
  password: "Rmte4744",
  database: "Contact_Form",
});

// app.get("/", function (req, res) {});

app.post("/", function (req, res) {
  let customer = {
    name: req.body.name,
  };
  connection.query(
    "INSERT INTO Customer_Info SET ?",
    customer,
    function (err, result) {
      if (err) throw err;
      res.send(
        "Thanks for joining us! Click the back arrow to go back to the main page!"
      );
      // res.redirect("/");
    }
  );
});

app.listen(3000, function () {
  console.log(`Server running on port 3000!`);
});

connection.end();