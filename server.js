const express = require("express");

const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io")(server);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomID: req.params.room });
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomID) => {
    console.log("joined the room");
    socket.join(roomID);
    socket.to(roomID).broadcast.emit("user-connected");
  });
});

server.listen(3030, () => {
  console.log("Server is running at 3030");
});
