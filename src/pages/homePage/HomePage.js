import MoviePanel from "../../components/moviePanel";
import "./homePage.css";

function HomePage(props) {
  const { currentUserId } = props;
  return (
    <div>
      <MoviePanel currentUserId={currentUserId} />
    </div>
  );
}

export default HomePage;
