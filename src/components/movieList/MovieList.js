import MovieCard from "../movieCard";
import "./movieList.css";

function MovieList(props) {
  const { movies } = props;
  return (
    <div className="movieList">
      {movies.map((movie) => {
        return <MovieCard key={movie.movieId} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
