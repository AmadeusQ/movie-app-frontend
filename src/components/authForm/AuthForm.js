import axios from "axios";
import { useState } from "react";
import "./authForm.css";

function AuthForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setIsLogged, setCurrentUserId } = props;

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const registerUser = async (username, password) => {
    const { data } = await axios.post(
      "http://localhost:8080/api/auth/register",
      {
        username,
        password,
      }
    );
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId);

    setCurrentUserId(data.userId);
    setIsLogged(localStorage.getItem("token"));
  };

  const loginUser = async (username, password) => {
    const { data } = await axios.post("http://localhost:8080/api/auth/login", {
      username,
      password,
    });
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId);

    setCurrentUserId(data.userId);
    setIsLogged(localStorage.getItem("token"));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(username, password);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(username, password);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      {error && <div className="authError">{error}</div>}
      <div className="authBtns">
        <button type="submit" onClick={handleLoginSubmit}>
          Login
        </button>
        <button type="submit" onClick={handleRegisterSubmit}>
          Register
        </button>
      </div>
    </form>
  );
}

export default AuthForm;
