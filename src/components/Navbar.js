import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Navbar = () => {
    const items=useSelector((store)=>store.cart.items)

  const [login, setLogin] = useState("Login");
  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex flex-row justify-between sm:px-32 border-b-[1px]">
      <div className="flex items-center">
        <Link to="/"><img src={LOGO_URL} alt="" className="w-16 sm:w-24" /></Link>
      </div>
      <div className="flex justify-between items-center whitespace-nowrap text-sm sm:text-lg">
        <ul className="flex items-center">
            <li className="sm:px-4 px-2">
                {onlineStatus?"🟢":"🔴"}
            </li>
          <li className="sm:px-4 px-2">
            <Link to="/">Home</Link>
            </li>
            <li className="sm:px-4 px-2">
            <Link to="/about">About Us</Link>
            </li>
            <li className="sm:px-4 px-2">
            <Link to="/contact">Contact</Link>
            </li>
            <li className="sm:px-4 px-2">
            <Link to="/cart"><i className="fa-solid fa-cart-shopping mr-1"></i>{items.length}</Link>
            </li>
          <button
            className="bg-teal-300 px-2 mr-2 sm:px-5 rounded-lg py-1"
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
