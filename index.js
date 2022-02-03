const express = require("express");
const app = express();

app.use(
  express.static(__dirname + "/public", { extensions: ["html"] }),
  (_, res, next) => {
    res.status(404);
    res.sendFile(__dirname + "/public/404.html");
  }
);

app.listen(8080);
