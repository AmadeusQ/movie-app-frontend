import Logo from "../logo/Logo";
import ProfileLogo from "../profileLogo";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="headerInner">
          <Logo />
          <ProfileLogo />
        </div>
      </div>
    </div>
  );
}

export default Header;
