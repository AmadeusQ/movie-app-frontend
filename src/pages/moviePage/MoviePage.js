import axios from "axios";
import { useEffect, useState } from "react";
import MovieInfo from "../../components/movieInfo";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import "./moviePage.css";

function MoviePage() {
  const movieId = window.location.href.split("movies/")[1];
  const [movie, setMovie] = useState({});
  const [movieActors, setMovieActors] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    async function getMovieData() {
      const movieData = await axios.get(
        `http://localhost:8080/api/movies/${movieId}`
      );
      setMovie(movieData.data);

      const movieActorsData = await axios.get(
        `http://localhost:8080/api/movies/${movieId}/actors`
      );
      setMovieActors(movieActorsData.data);

      const movieGenresData = await axios.get(
        `http://localhost:8080/api/movies/${movieId}/genres`
      );
      setMovieGenres(movieGenresData.data);
    }
    getMovieData();
  }, [movieId]);

  return (
    <div className="moviePage">
      <MovieInfo
        movie={movie}
        movieActors={movieActors}
        movieGenres={movieGenres}
      />
      <VideoPlayer movieUrl={movie.movieUrl} />
    </div>
  );
}

export default MoviePage;
