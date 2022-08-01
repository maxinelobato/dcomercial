import VideoPlayer from "react-background-video-player";
import styles from "./video/styles.module.css";

export function VideoBG() {
  return (
    <VideoPlayer
      className={styles.reactvideocover}
      src={
        "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
      }
      autoPlay="true"
      unmute="true"
      preload="auto"
    />
  );
}
