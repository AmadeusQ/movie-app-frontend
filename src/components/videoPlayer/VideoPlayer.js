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
        volume={0.5}
        width="960px"
        height="540px"
      />
    </div>
  );
}

export default VideoPlayer;
