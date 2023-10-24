import React from "react";
import ReactDOM from "react-dom/client";
import { resData } from "./resData";

const Navbar = () => {
    return (
        <div className="navbar-cont">
            <div className="logo-cont">
                <img
                    src="https://img.freepik.com/premium-vector/kitchen-chef-logo-design-vector-template_15146-1164.jpg?size=626&ext=jpg&ga=GA1.1.1729305986.1696401089&semt=ais"
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
const ResCard = ({resData}) => {
    const { name, areaName, avgRating, cloudinaryImageId, costForTwo,sla } = resData?.info;
    return (
        <div className="res-cont">
            <div className="res-logo">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="" className="image" />
            </div>
            <h3 className="res-name">{name}</h3>
            <div className="res-data">
                <p className="ratings">{avgRating} </p>
                <p className="eta">{sla.deliveryTime}</p>
            </div>
            <p className="price">{costForTwo}</p>
            <p className="area-name">{areaName}</p>
        </div>
    );
};
const Body = () => {
    return (
        <div className="body-cont">
            <div className="search">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search for Restaurant and Foods"
                />
            </div>
            <div className="cards-cont">
                <ResCard resData={resData[0]} />
            </div>
        </div>
    );
};
const App = () => {
    return (
        <div className="app-cont">
            <Navbar />
            <Body />
            {console.log(resData)}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
