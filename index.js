const path = require("path");
const express = require("express");
const app = express();
const publicDirPath = path.join(__dirname, "../public");

var fs = require("fs");

app.use(function (req, res, next) {
  if (req.path.indexOf(".") === -1) {
    var file = publicDirPath + req.path + ".html";
    fs.exists(file, function (exists) {
      if (exists) req.url += ".html";
      next();
    });
  } else next();
});
app.use(express.static(publicDirPath));

app.use(function (req, res) {
  res.status(404).sendFile(publicDirPath + "/404.html");
});

app.listen(8080, () => {
  console.log("Server is up.");
});
