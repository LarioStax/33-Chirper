const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const errorHandler = require("./handlers/error.js");

app.use(cors());
app.use(bodyParser.json());

app.get("/", function(req, res, next) {
  res.json("Connected");
});

app.use(function (req, res, next) {
  const err = new Error("Not Found!");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Server listening on port ${port}!`)
});