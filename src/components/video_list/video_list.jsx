import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

function VideoList({ videos }) {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem video={video} key={video.id} />
      ))}
    </ul>
  );
}

export default VideoList;
