import { useState } from "react";
import "./movieCard.css";

function MovieCard(props) {
  const { movieId, title, moviePosterUrl } = props.movie;

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <a href={`/movies/${movieId}`} className="movieCard" style={{backgroundColor: !imageLoaded ? "#9075aa" : null}}>
      <img
        className="moviePoster"
        src={moviePosterUrl}
        alt={title}
        onLoad={handleImageLoad}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      {imageLoaded && (
        <div className="movieInfo">
          <div className="movieTitle">{title}</div>
        </div>
      )}
    </a>
  );
}

export default MovieCard;
