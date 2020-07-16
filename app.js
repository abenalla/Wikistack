var express = require("express");
var app = express();
const { db } = require("./models");
const models = require("./models");

const init = async () => {
  await models.User.sync();
  await models.Page.sync();

  // THIS DROPS ALL TABLES THEN RECREATES THEM BASED ON THE JS DEFINITION
  models.db.sync({ force: true });

  yourExpressAppVar.listen(PORT, () => {
    console.log(`SERVER IS LISTENING ON PORT ${PORT}!`);
  });
};

init();

db.authenticate().then(() => {
  console.log("connected to database");
});

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/", (req, res, next) => {
  res.redirect("/wiki");
});

app.listen(3000);
