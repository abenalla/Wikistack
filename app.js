const express = require("express");
const app = express();
const morgan = require("morgan");
const layout = require("./views/layout");
const { db } = require("./models");
const models = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// db.authenticate().then(() => {
//   console.log("connected to database wikistack");
// });

app.use("/wiki", wikiRouter);

app.get("/", (req, res) => {
  const content = "";
  res.send(layout(content));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
