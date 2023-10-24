import { LOGO_URL } from "../utils/constants";

export default Navbar = () => {
    return (
        <div className="navbar-cont">
            <div className="logo-cont">
                <img
                    src={LOGO_URL}
                    alt=""
                    className="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};