import "./app.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthPage from "../../pages/authPage";
import HomePage from "../../pages/homePage";
import MoviePage from "../../pages/moviePage";
import ProfilePage from "../../pages/profilePage";
import Header from "../header/Header";
import "../media.css";
import { useState } from "react";
import DeleteProfilePage from "../../pages/deleteProfilePage/DeleteProfilePage";
import AdminPage from "../../pages/adminPage/AdminPage";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  const [currentUserId, setCurrentUserId] = useState(
    localStorage.getItem("userId") || null
  );
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("userRole") || ""
  );
  return (
    <Router>
      <div className="app">
        {isLogged && <Header />}
        <Routes>
          {!isLogged && (
            <Route
              path="/auth"
              element={<AuthPage setCurrentUserId={setCurrentUserId} />}
            />
          )}
          {isLogged && (
            <Route
              path="/movies"
              element={<HomePage currentUserId={currentUserId} />}
            />
          )}
          {isLogged && (
            <Route
              path="/movies/:id"
              element={<MoviePage currentUserId={currentUserId} />}
            />
          )}
          {isLogged && (
            <Route
              path="/profile"
              element={<ProfilePage currentUserId={currentUserId} />}
            />
          )}
          {isLogged && (
            <Route
              path="/profile/delete"
              element={
                <DeleteProfilePage
                  currentUserId={currentUserId}
                  setCurrentUserId={setCurrentUserId}
                />
              }
            />
          )}
          {isLogged && isAdmin && (
            <Route
              path="/admin"
              element={
                <AdminPage
                  currentUserId={currentUserId}
                  setCurrentUserId={setCurrentUserId}
                />
              }
            />
          )}
          {!isLogged && (
            <Route path="*" element={<Navigate replace to="/auth" />} />
          )}
          {isLogged && (
            <Route path="*" element={<Navigate replace to="/movies" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
