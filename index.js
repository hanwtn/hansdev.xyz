const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404);
  res.sendFile(__dirname + "/public/404.html");
});

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/public/contact.html");
});

app.listen(8080);
