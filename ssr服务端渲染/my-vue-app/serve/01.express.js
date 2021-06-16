const express = require("express");
const server = express();
server.get("/", function (req, res) {
  res.send("hello world");
});
server.listen(80, () => {
  console.log("server listening on port 80");
});
