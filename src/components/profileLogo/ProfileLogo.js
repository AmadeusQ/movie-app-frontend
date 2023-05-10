import "./profileLogo.css";
import profileLogo from "../../assets/images/profileLogo.png";
import { useState } from "react";
import axios from "axios";

function ProfileLogo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = async () => {
    localStorage.setItem("token", "");
    localStorage.setItem("userId", null);
    await axios.post("http://localhost:8080/api/auth/logout", {
      userId: 3,
    });
  };

  return (
    <div className="profile">
      <img
        src={profileLogo}
        alt={"Profile Logo"}
        className="profileLogo"
        onClick={handleMenuClick}
      />
      {isMenuOpen && (
        <ul className="menu">
          <li>
            <a href="/profile" className="menuItem profileLink">
              Profile
            </a>
          </li>
          <li>
            <a href="/profile/delete" className="menuItem deleteProfile">
              Delete
            </a>
          </li>
          <li>
            <a
              href="/"
              className="menuItem logout"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileLogo;

// eslint-disable-next-line no-lone-blocks
{
  /* <div href="/profile" className="profileLink">
  <img src={profileLogo} alt={"Profile Logo"} className="profileLogo" />
</div>; */
}
