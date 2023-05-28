// import { useEffect, useState } from "react";
// import "./userMovieList.css";
// import axios from "axios";
// import MovieList from "../movieList/MovieList";

// function UserMovieList(props) {
//   const { listName } = props;
//   const [movieList, setMovieList] = useState([]);
//   useEffect(() => {
//     async function getMovieList() {
//       const userId = localStorage.getItem("userId");
//       const res = await axios.get(
//         `http://localhost:8080/api/users/id/${userId}/${listName}`
//       );
//       let movies = res.data.map((item) => item.movie);
//       setMovieList(movies);
//     }

//     getMovieList();
//   }, [listName]);
//   return <MovieList movies={movieList} />;
// }

// export default UserMovieList;
import React, { Component } from "react";
import axios from "axios";
import MovieList from "../movieList/MovieList";
import "./userMovieList.css";

class UserMovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    this.getMovieList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.listName !== this.props.listName) {
      this.getMovieList();
    }
  }

  async getMovieList() {
    try {
      const userId = localStorage.getItem("userId");
      const res = await axios.get(
        `http://localhost:8080/api/users/id/${userId}/${this.props.listName}`
      );
      const movies = res.data.map((item) => item.movie);
      this.setState({ movieList: movies });
    } catch (error) {
      console.error("Error retrieving movie list:", error);
    }
  }

  render() {
    const { movieList } = this.state;

    return <MovieList movies={movieList} />;
  }
}

export default UserMovieList;
