const path = require("path");
const express = require("express");
const app = express();
const publicDirPath = path.join(__dirname, "../public");

app.use(
  "/",
  express.static(publicDirPath, { index: false, extensions: ["html"] })
);

app.listen(8080, () => {
  console.log("Server is up.");
});
