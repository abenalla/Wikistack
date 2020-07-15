var express = require("express");
var app = express();
const { db } = require("/models");

db.authenticate().then(() => {
  console.log("connected to database");
});

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(3000);
