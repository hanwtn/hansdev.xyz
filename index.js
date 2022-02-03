const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404);
  res.sendFile(__dirname + "/public/404.html");
});

app.use(express.static(__dirname + "/public"), {
  extensions: ["html"],
});

app.listen(8080);
