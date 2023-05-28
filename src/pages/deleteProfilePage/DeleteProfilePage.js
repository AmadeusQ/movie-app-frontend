import axios from "axios";
import React from "react";
import "./deleteProfilePage.css";
import { useDispatch } from "react-redux";
import { signOutAction } from "../../actions";

function DeleteProfilePage(props) {
  const { currentUserId, setCurrentUserId } = props;
  const dispatch = useDispatch();

  async function deleteProfile(currentUserId) {
    await axios.delete(`http://localhost:8080/api/users/id/${currentUserId}`);
    dispatch(signOutAction());
    localStorage.setItem("token", "");
    setCurrentUserId(null);
    localStorage.setItem("userRole", null);
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
