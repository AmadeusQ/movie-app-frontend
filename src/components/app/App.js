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

function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token") || "");
  return (
    <Router>
      <div className="app">
        {isLogged && <Header setIsLogged={setIsLogged}/>}
        <Routes>
          {!isLogged && <Route path="/auth" element={<AuthPage setIsLogged={setIsLogged}/>} />}
          {isLogged && <Route path="/movies" element={<HomePage />} />}
          {isLogged && <Route path="/movies/:id" element={<MoviePage />} />}
          {isLogged && <Route path="/profile" element={<ProfilePage />} />}
          {!isLogged && <Route path="*" element={<Navigate replace to="/auth" />} />}
          {isLogged && <Route path="*" element={<Navigate replace to="/movies" />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*
<Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/movie/:name" element={<MoviePage />}/>
        <Route path="/profile" element={<ProfilePage />}/>

        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
*/
