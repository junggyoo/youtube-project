import React from "react";

function VideoItem({ video }) {
  return <h1>{video.snippet.title}</h1>;
}

export default VideoItem;
