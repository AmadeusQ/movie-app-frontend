import AuthForm from "../../components/authForm/AuthForm";
import "./authPage.css";

function AuthPage(props) {
  const { setCurrentUserId } = props;

  return (
    <div className="authPage">
      <AuthForm setCurrentUserId={setCurrentUserId} />
    </div>
  );
}

export default AuthPage;
