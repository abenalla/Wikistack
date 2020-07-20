const express = require("express");
const router = express.Router();
const { Page } = require("../models");
const { addPage } = require("../views");

router.get("/", (req, res, next) => {
  res.send("got to GET /wiki/");
});

router.post("/", (req, res, next) => {
  res.send("got to POST /wiki/");
});

router.get("/add", (req, res, next) => {
  res.send("got to GET /wiki/add");
});

module.exports = router;
