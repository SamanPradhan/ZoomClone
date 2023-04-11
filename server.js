const express = require("express");

const app = express();
const server = require("http").Server(app);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("room");
});
server.listen(3030, () => {
  console.log("Server is running at 3030");
});
