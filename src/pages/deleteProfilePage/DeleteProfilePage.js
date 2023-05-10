import axios from "axios";
import React from "react";

function DeleteProfilePage(props) {
  const { currentUserId, setIsLogged, setCurrentUserId } = props;

  async function deleteProfile(currentUserId) {
    await axios.delete(`http://localhost:8080/api/users/id/${currentUserId}`);
    setIsLogged("");
    localStorage.setItem("token", "");
    setCurrentUserId(null);
  }

  async function handleDeleteBtnClick(e) {
    e.preventDefault();
    await deleteProfile(currentUserId);
  }

  return (
    <div className="deleteProfilePage">
      <div className="container">
        <div className="deleteButton">
          <button onClick={handleDeleteBtnClick}>Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProfilePage;
