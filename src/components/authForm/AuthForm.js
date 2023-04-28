import axios from "axios";
import { useState } from "react";

function AuthForm(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { type, setIsLogged } = props;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const registerUser = async (email, username, password) => {
    const { data } = await axios.post(
      "http://localhost:8080/api/auth/register",
      {
        email,
        name: username,
        password,
      }
    );
    localStorage.setItem("token", data.token);
    setIsLogged(localStorage.getItem("token"));
  };

  const loginUser = async (email, password) => {
    const { data } = await axios.post("http://localhost:8080/api/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", data.token);
    setIsLogged(localStorage.getItem("token"));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    loginUser(email, password);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    await registerUser(email, username, password);
  };

  return (
    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {type === "Register" && (
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
      )}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button
        type="submit"
        onClick={type === "Login" ? handleLoginSubmit : handleRegisterSubmit}
      >
        {type}
      </button>
    </form>
  );
}

export default AuthForm;
