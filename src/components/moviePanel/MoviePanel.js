import axios from "axios";
import { useState, useEffect } from "react";
import GenresFilterPanel from "../genresFilterPanel";
import MovieList from "../movieList";
import SearchPanel from "../searchPanel/SearchPanel";
import "./moviePanel.css";

function MoviePanel() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedGenreId, setSelectedGenreId] = useState(null);

  const onGenreSelect = (genreId) => {
    setSelectedGenreId(genreId);
  };

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
      setMovies(moviesData.data);
    }
    getMoviesData();
  }, [selectedGenreId]);

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
              <GenresFilterPanel
                selectedGenreId={selectedGenreId}
                onGenreSelect={onGenreSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePanel;
