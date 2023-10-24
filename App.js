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
const ResCard = ({ resData }) => {
    const {
        name,
        areaName,
        avgRating,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        sla,
    } = resData?.info;
    return (
        <div className="res-cont">
            <div className="res-logo">
                <img
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        cloudinaryImageId
                    }
                    alt=""
                    className="image"
                />
            </div>
            <h3 className="res-name">{name}</h3>
            <div className="res-data">
                <p className="ratings">{avgRating} stars </p>
                <p className="eta">{sla.deliveryTime} mins</p>
            </div>
            <p className="cuisines">{cuisines.join(", ")}</p>

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
                {resData.map((resData) => {
                    return <ResCard key={resData.info.id} resData={resData} />;
                })}
            </div>
        </div>
    );
};
const App = () => {
    return (
        <div className="app-cont">
            <Navbar />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
