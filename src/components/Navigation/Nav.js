import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <NavLink to="/booking">Reservation</NavLink>
          </li>
          <li>
            <a>Order Online</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
