import VideoPlayer from "react-background-video-player";
import styles from "./video/styles.module.css";

export function VideoBG() {
  return (
    <VideoPlayer
      className={styles.reactvideocover}
      src="/src/components/video/index.mp4"
      autoPlay="true"
      unmute="true"
      preload="auto"
    />
  );
}
