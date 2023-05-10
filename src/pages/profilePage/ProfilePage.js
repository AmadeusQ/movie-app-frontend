import { useEffect, useState } from "react";
import "./profilePage.css";
import axios from "axios";
import UserMovieList from "../../components/userMovieList/UserMovieList";

function ProfilePage(props) {
  const { currentUserId } = props;
  const [userData, setUserData] = useState({});
  const [listName, setListName] = useState("watchedlist");
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
          >
            WatchedList
          </button>
          <button
            onClick={() => {
              handleBtnClick("watchlist");
            }}
          >
            WatchList
          </button>
          <button
            onClick={() => {
              handleBtnClick("favorite");
            }}
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
