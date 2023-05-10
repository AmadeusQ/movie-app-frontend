import AuthForm from "../../components/authForm/AuthForm";
import "./authPage.css";

function AuthPage(props) {
  const { setIsLogged, setCurrentUserId } = props;

  return (
    <div className="authPage">
      <div className="authForm">
        <AuthForm
          setIsLogged={setIsLogged}
          setCurrentUserId={setCurrentUserId}
        />
      </div>
    </div>
  );
}

export default AuthPage;
