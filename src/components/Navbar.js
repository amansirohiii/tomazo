import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="navbar-cont">
      <div className="logo-cont">
        <Link to="/"><img src={LOGO_URL} alt="" className="logo" /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/">Cart</Link>
            </li>
          <button
            className="login"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
