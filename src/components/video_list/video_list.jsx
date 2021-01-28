import React from "react";
import VideoItem from "../video_item/video_item";

function VideoList({ videos }) {
  return (
    <ul>
      {videos.map((video) => (
        <VideoItem video={video} key={video.id} />
      ))}
    </ul>
  );
}

export default VideoList;
