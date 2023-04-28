import "./movieCard.css";

function MovieCard(props) {
  
  const { movieId, title, moviePosterUrl} = props.movie;

  return (
    <a href={`/movies/${movieId}`} className="movieCard">
      <img className="moviePoster" src={moviePosterUrl} alt={title} />
      <div className="movieInfo">
        <div className="movieTitle">{title}</div>
      </div>
    </a>
  );
}

export default MovieCard;
