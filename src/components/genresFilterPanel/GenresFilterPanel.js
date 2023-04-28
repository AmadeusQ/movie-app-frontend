import axios from "axios";
import { useEffect, useState } from "react";
import GenreItem from "../genreItem";
import "./genresFilterPanel.css";

function GenresFilterPanel(props) {
  const { selectedGenreId, onGenreSelect } = props;
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function getGenres() {
      const genresData = await axios.get("http://localhost:8080/api/genres");
      setGenres(genresData.data);
    }
    getGenres();
  }, []);
  return (
    <div className="genresPanel">
      {genres.map((genre) => {
        return (
          <GenreItem
            key={genre.genreId}
            genre={genre}
            selectedGenreId={selectedGenreId}
            onGenreSelect={onGenreSelect}
          />
        );
      })}
    </div>
  );
}

export default GenresFilterPanel;
