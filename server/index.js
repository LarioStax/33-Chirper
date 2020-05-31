const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const authRoutes = require("./routes/auth.js");
const messagesRoutes = require("./routes/messages.js");

const { loginRequired, ensureCorrectUser } = require(".middleware/auth.js");
const errorHandler = require("./handlers/error.js");

app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res, next) {
  res.json("Connected");
});

app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", loginRequired, ensureCorrectUser, messagesRoutes);

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