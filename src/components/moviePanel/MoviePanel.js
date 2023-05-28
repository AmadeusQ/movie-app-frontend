import axios from "axios";
import { useState, useEffect } from "react";
import GenresFilterPanel from "../genresFilterPanel";
import MovieList from "../movieList";
import SearchPanel from "../searchPanel/SearchPanel";
import "./moviePanel.css";
import { useDispatch, useSelector } from "react-redux";
import { loadMoviesAction } from "../../actions";

function MoviePanel() {
  const movies = useSelector((state) => state.movies);
  const selectedGenreId = useSelector((state) => state.genre);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    async function getMoviesData() {
      let moviesData;
      if (selectedGenreId !== null) {
        moviesData = await axios.get(
          `http://localhost:8080/api/movies/genre/${selectedGenreId}`
        );
      } else {
        moviesData = await axios.get("http://localhost:8080/api/movies");
      }
      dispatch(loadMoviesAction(moviesData.data));
    }
    getMoviesData();
  }, [selectedGenreId, dispatch]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="moviePanel">
      <div className="container">
        <div className="moviePanelInner">
          <div className="searchPanel">
            <SearchPanel
              searchValue={searchValue}
              onSearchValueChange={onSearchValueChange}
            />
          </div>
          <div className="botPanel">
            <div className="leftMoviePanel">
              <MovieList movies={filteredMovies} />
            </div>
            <div className="rightMoviePanel">
              <GenresFilterPanel selectedGenreId={selectedGenreId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePanel;
