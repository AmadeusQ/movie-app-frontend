import axios from "axios";
import "./movieInfo.css";
import { useState } from "react";

function MovieInfo(props) {
  const { title, description, moviePosterUrl, releaseYear, duration } =
    props.movie;
  const { movieId } = props;
  const actorsArray = props.movieActors
    .map((actor) => actor.actorName)
    .join(", ");
  const genresArray = props.movieGenres
    .map((genre) => genre.genreName)
    .join(", ");
  const userId = localStorage.getItem("userId");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const addToWatchlist = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/users/id/${userId}/watchlist`,
        { movieId }
      );
      setMsg(res.data);
      setError("");
    } catch (error) {
      setMsg("");
      setError(error.response.data.message);
    }

    try {
      await axios.delete(
        `http://localhost:8080/api/users/id/${userId}/watchedlist/${movieId}`
      );
    } catch (error) {}
    try {
      await axios.delete(
        `http://localhost:8080/api/users/id/${userId}/favorite/${movieId}`
      );
    } catch (error) {}
  };

  const addToWatchedlist = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/users/id/${userId}/watchedlist`,
        {
          movieId,
        }
      );
      setMsg(res.data);
      setError("");
    } catch (error) {
      setMsg("");
      setError(error.response.data.message);
    }

    try {
      await axios.delete(
        `http://localhost:8080/api/users/id/${userId}/watchlist/${movieId}`
      );
    } catch (error) {}
    try {
      await axios.delete(
        `http://localhost:8080/api/users/id/${userId}/favorite/${movieId}`
      );
    } catch (error) {}
  };

  const addToFavorite = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/users/id/${userId}/favorite`,
        { movieId }
      );
      setMsg(res.data);
      setError("");
    } catch (error) {
      setMsg("");
      setError(error.response.data.message);
    }

    try {
      await axios.delete(
        `http://localhost:8080/api/users/id/${userId}/watchlist/${movieId}`
      );
    } catch (error) {}
    try {
      await axios.delete(
        `http://localhost:8080/api/users/id/${userId}/watchedlist/${movieId}`
      );
    } catch (error) {}
  };

  const deleteFromList = async (e) => {
    e.preventDefault();
    setMsg("");
    setError("");
    try {
      await axios.delete(
        `http://localhost:8080/api/users/id/${userId}/watchlist/${movieId}`
      );
    } catch (error) {}
    try {
      await axios.delete(
        `http://localhost:8080/api/users/id/${userId}/watchedlist/${movieId}`
      );
    } catch (error) {}
    try {
      await axios.delete(
        `http://localhost:8080/api/users/id/${userId}/favorite/${movieId}`
      );
    } catch (error) {}
  };

  return (
    <div className="movieBlock">
      <div className="moviePosterBlock">
        <img className="moviePoster2" src={moviePosterUrl} alt={title} />
        <div className="addToListBtns">
          <button onClick={addToWatchlist}>Add to watchlist</button>
          <button onClick={addToWatchedlist}>Add to watchlisted</button>
          <button onClick={addToFavorite}>Add to favorite</button>
          <button onClick={deleteFromList}>Delete from list</button>
          <div
            className={(msg && "msg successAdd") || (error && "msg errorAdd")}
          >
            {msg || error}
          </div>
        </div>
      </div>
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
