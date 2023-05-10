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

function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token") || "");
  const [currentUserId, setCurrentUserId] = useState(
    localStorage.getItem("userId") || null
  );
  return (
    <Router>
      <div className="app">
        {isLogged && <Header setIsLogged={setIsLogged} />}
        <Routes>
          {!isLogged && (
            <Route
              path="/auth"
              element={
                <AuthPage
                  setIsLogged={setIsLogged}
                  setCurrentUserId={setCurrentUserId}
                />
              }
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
                  setIsLogged={setIsLogged}
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
