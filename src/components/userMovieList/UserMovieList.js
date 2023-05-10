import { useEffect, useState } from "react";
import "./userMovieList.css";
import axios from "axios";
import MovieList from "../movieList/MovieList";

function UserMovieList(props) {
  const { listName } = props;
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    async function getMovieList() {
      const userId = localStorage.getItem("userId");
      const res = await axios.get(
        `http://localhost:8080/api/users/id/${userId}/${listName}`
      );
      let movies = res.data.map((item) => item.movie);
      setMovieList(movies);
    }

    getMovieList();
  }, [listName]);
  return <MovieList movies={movieList} />;
}

export default UserMovieList;
