import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
//   console.log(useParams());
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { id, name, city, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu-cont">
      <div className="res-info">
        <h1 className="menu-res-name">{name}</h1>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <p className="res-cost">{costForTwoMessage}</p>
      </div>
      <div className="res-menu">
        {itemCards.map((item) => {
          const { id, name, price, description } = item.card.info;
          return (
            <div className="res-item" key={id}>
                <h3 className="item-name">{name}</h3>
                <p className="item-desc">{description}</p>
                <p className="item-price">₹{price/100}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
