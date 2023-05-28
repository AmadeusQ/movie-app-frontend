import { useEffect, useState } from "react";
import "./profilePage.css";
import axios from "axios";
import UserMovieList from "../../components/userMovieList/UserMovieList";

function ProfilePage(props) {
  const { currentUserId } = props;
  const [userData, setUserData] = useState({});
  const [listName, setListName] = useState("watchedlist");
  const [activeButton, setActiveButton] = useState("watchedlist");
  useEffect(() => {
    async function getUserData() {
      const { data } = await axios.get(
        `http://localhost:8080/api/users/id/${currentUserId}`
      );
      setUserData({ username: data.username });
    }
    getUserData();
  }, [currentUserId]);

  function handleBtnClick(listName) {
    setListName(listName);
    setActiveButton(listName);
  }
  return (
    <div className="profilePage">
      <div className="container">
        <div className="userameProfile">{userData.username} Profile</div>
        <div className="showMovieListBtns">
          <button
            onClick={() => {
              handleBtnClick("watchedlist");
            }}
            className={activeButton === "watchedlist" ? "activeBtn" : ""}
          >
            WatchedList
          </button>
          <button
            onClick={() => {
              handleBtnClick("watchlist");
            }}
            className={activeButton === "watchlist" ? "activeBtn" : ""}
          >
            WatchList
          </button>
          <button
            onClick={() => {
              handleBtnClick("favorite");
            }}
            className={activeButton === "favorite" ? "activeBtn" : ""}
          >
            Favorite
          </button>
        </div>
        <UserMovieList listName={listName} />
      </div>
    </div>
  );
}

export default ProfilePage;
