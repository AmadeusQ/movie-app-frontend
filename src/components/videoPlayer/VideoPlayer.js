import ReactPlayer from "react-player";
import "./videoPlayer.css";

function VideoPlayer(props) {
  const { movieUrl } = props;
  return (
    <div className="videoPlayer">
      <ReactPlayer
        url={movieUrl}
        controls={true}
        playing={false}
        width="960px"
        height="540px"
        volume={0.5}
      />
    </div>
  );
}

export default VideoPlayer;
