const express = require("express");
var bodyParser = require("body-parser");

const route = require("./routes/route.js");
const route2 = require("./routes/route2");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", route);

app.listen(3000, function () {
  console.log("Express app running on port " + 3000);
});

app.use("/", route2);

app.listen(3001, function () {
  console.log("Express app running on port " + 3001);
});

// A || B
