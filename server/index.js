const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get("/", function(req, res, next) {
  res.send("Connected");
})

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Server listening on port ${port}!`)
})