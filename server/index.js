const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const db = require("./models/index.js");

const authRoutes = require("./routes/auth.js");
const messagesRoutes = require("./routes/messages.js");

const { loginRequired, ensureCorrectUser } = require("./middleware/auth.js");
const errorHandler = require("./handlers/error.js");

app.use(cors());
app.use(bodyParser.json());

// app.get("/", function (req, res, next) {
//   res.json("Connected");
// });

app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages",
  loginRequired,
  ensureCorrectUser,
  messagesRoutes
);

app.get("/api/messages", loginRequired, async function(req, res, next) {
  try {
    let messages = await db.Message.find()
    .sort({createdAt: "desc"})
    .populate("user", {
      username: true,
      profileImageUrl: true
    })
    return res.status(200).json(messages);
  } catch(err) {
    return next(err);
  }
})

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