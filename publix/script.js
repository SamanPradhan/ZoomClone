const myVideo = document.createElement("video");
myVideo.muted = true;
let myVideoStream;
const videoGrid = document.getElementById("video_grid");
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
  });

const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
};
