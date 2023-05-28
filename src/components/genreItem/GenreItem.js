import { useDispatch, useSelector } from "react-redux";
import "./genreItem.css";
import { selectGenreAction } from "../../actions";

function GenreItem(props) {
  const { genre } = props;
  const selectedGenreId = useSelector((state) => state.genre);
  const dispatch = useDispatch();

  const onStatusChange = () => {
    if (selectedGenreId === genre.genreId) {
      dispatch(selectGenreAction(null));
    } else {
      dispatch(selectGenreAction(genre.genreId));
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
