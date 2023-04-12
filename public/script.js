const videoGrid = document.getElementById("video_grid");

const myVideo = document.createElement("video");

const socket = io("/");
myVideo.muted = true;
let myVideoStream;

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
  });

socket.emit("join-room", ROOM_ID);
socket.on("user-connected", () => {
  connectToNewUser();
});
const connectToNewUser = () => {
  console.log("new user");
};
const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
  console.log("hello world");
};
