import React, { useState } from "react";
import axios from "axios";
import './adminPage.css';

function AdminPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [movieUrl, setMovieUrl] = useState("");
  const [moviePosterUrl, setMoviePosterUrl] = useState("");
  const [duration, setDuration] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleReleaseYearChange = (event) => {
    setReleaseYear(event.target.value);
  };

  const handleMovieUrlChange = (event) => {
    setMovieUrl(event.target.value);
  };

  const handleMoviePosterUrlChange = (event) => {
    setMoviePosterUrl(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/movies", {
        title,
        description,
        releaseYear: Number(releaseYear),
        movieUrl,
        moviePosterUrl,
        duration: Number(duration),
      });
      alert('Movie successfully added');

    } catch (error) {
    }
  };

  return (
    <div className="container">
      <h1>Add Movie</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="input"
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          className="textarea"
          placeholder="Description"
        />
        <input
          type="number"
          value={releaseYear}
          onChange={handleReleaseYearChange}
          className="input"
          placeholder="Release Year"
        />
        <input
          type="text"
          value={movieUrl}
          onChange={handleMovieUrlChange}
          className="input"
          placeholder="Movie URL"
        />
        <input
          type="text"
          value={moviePosterUrl}
          onChange={handleMoviePosterUrlChange}
          className="input"
          placeholder="Movie Poster URL"
        />
        <input
          type="number"
          value={duration}
          onChange={handleDurationChange}
          className="input"
          placeholder="Duration"
        />
        <button type="submit" className="button">
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AdminPage;
