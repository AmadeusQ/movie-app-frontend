// import axios from "axios";
// import { useEffect, useState } from "react";
// import GenreItem from "../genreItem";
// import "./genresFilterPanel.css";

// function GenresFilterPanel(props) {
//   const { selectedGenreId, onGenreSelect } = props;
//   const [genres, setGenres] = useState([]);
//   useEffect(() => {
//     async function getGenres() {
//       const genresData = await axios.get("http://localhost:8080/api/genres");
//       setGenres(genresData.data);
//     }
//     getGenres();
//   }, []);
//   return (
//     <div className="genresPanel">
//       {genres.map((genre) => {
//         return (
//           <GenreItem
//             key={genre.genreId}
//             genre={genre}
//             selectedGenreId={selectedGenreId}
//             onGenreSelect={onGenreSelect}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default GenresFilterPanel;
import axios from "axios";
import React, { Component } from "react";
import GenreItem from "../genreItem";
import "./genresFilterPanel.css";

class GenresFilterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
    };
  }

  componentDidMount() {
    this.getGenres();
  }

  async getGenres() {
    try {
      const genresData = await axios.get("http://localhost:8080/api/genres");
      this.setState({ genres: genresData.data });
    } catch (error) {
      console.error("Error retrieving genres:", error);
    }
  }

  render() {
    const { genres } = this.state;

    return (
      <div className="genresPanel">
        {genres.map((genre) => (
          <GenreItem key={genre.genreId} genre={genre} />
        ))}
      </div>
    );
  }
}

export default GenresFilterPanel;
