import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Navbar = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between px-32 border-b-[1px]">
      <div className="">
        <Link to="/"><img src={LOGO_URL} alt="" className="w-24" /></Link>
      </div>
      <div className="flex justify-center">
        <ul className="flex items-center">
            <li className="px-4">
                OnlineStatus: {onlineStatus?"🟢":"🔴"}
            </li>
          <li className="px-4">
            <Link to="/">Home</Link>
            </li>
            <li className="px-4">
            <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
            <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">
            <Link to="/">Cart</Link>
            </li>
          <button
            className="bg-teal-300 px-5 rounded-lg py-1"
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
