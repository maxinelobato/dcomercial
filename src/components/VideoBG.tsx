import VideoPlayer from "react-background-video-player";
import styles from "./video/styles.module.css";
import sample from "./video/index.mp4";

export function VideoBG() {
  return (
    <video className={styles.reactvideocover} autoPlay loop muted>
      <source src={sample} type="video/mp4" />
    </video>
  );
}
