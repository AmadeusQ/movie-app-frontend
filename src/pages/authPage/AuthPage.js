import { useState } from "react";
import AuthForm from "../../components/authForm/AuthForm";
import "./authPage.css";

function AuthPage(props) {
  const [type, setType] = useState("Login");
  const { setIsLogged } = props;

  return (
    <div className="authPage">
      <div className="authForm">
        <div className="changeAuthTypeBtns">
          <button
            onClick={() => {
              setType("Login");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setType("Register");
            }}
          >
            Register
          </button>
        </div>
        <AuthForm type={type} setIsLogged={setIsLogged}/>
      </div>
    </div>
  );
}

export default AuthPage;
