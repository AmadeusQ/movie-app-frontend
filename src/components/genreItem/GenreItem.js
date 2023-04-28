import "./genreItem.css";

function GenreItem(props) {
  const { selectedGenreId, onGenreSelect, genre } = props;

  const onStatusChange = () => {
    if (selectedGenreId === genre.genreId) {
      onGenreSelect(null);
    } else {
      onGenreSelect(genre.genreId);
    }
  };
  return (
    <div
      className={
        selectedGenreId === genre.genreId
          ? "genreItem activeGenreItem"
          : "genreItem"
      }
      onClick={() => {
        onStatusChange();
      }}
    >
      {genre.genreName}
    </div>
  );
}

export default GenreItem;
