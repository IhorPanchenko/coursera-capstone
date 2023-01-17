import Nav from "../Navigation/Nav";
import logo from "../../assets/images/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="container">
      <div>
        <img src={logo} alt="logo"></img>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
