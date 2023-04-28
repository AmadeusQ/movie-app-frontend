import "./movieInfo.css";

function MovieInfo(props) {
  const { title, description, moviePosterUrl, releaseYear, duration } =
    props.movie;
  const actorsArray = props.movieActors
    .map((actor) => actor.actorName)
    .join(", ");
  const genresArray = props.movieGenres
    .map((genre) => genre.genreName)
    .join(", ");
  return (
    <div className="movieBlock">
      <img className="moviePosterBlock" src={moviePosterUrl} alt={title} />
      <div className="movieInfoBlock">
        <p className="movieTitleInfo">Title: {title}</p>
        <p className="movieDescriptionInfo">Description: {description}</p>
        <p className="movieActorsInfo">Actors: {actorsArray}</p>
        <p className="movieGenresInfo">Genres: {genresArray}</p>
        <p className="movieReleaseYearInfo">Release year: {releaseYear}</p>
        <p className="movieDurationInfo">Duration: {duration} min</p>
      </div>
    </div>
  );
}

export default MovieInfo;
