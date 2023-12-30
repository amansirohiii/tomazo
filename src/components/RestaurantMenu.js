import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex]=useState();
//   console.log(useParams());

    const resInfo=useRestaurantMenu(resId);
  if (resInfo === null) {
    return <div className="flex justify-center items-center h-screen">
    <h1 className="text-4xl font-bold">Loading...</h1>
  </div>;
  }
  const { id, name, city, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card?.card?.["@type"]=== 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
console.log(categories)
  return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage} </p>
        {categories.map((category, index)=>(
            <RestaurantCategory key={category.card.card.title} data={category?.card?.card}
            showItems={index===showIndex?true:false}
            setShowIndex={()=>setShowIndex(index===showIndex?null:index)} />
        ))}

    </div>
  );
};

export default RestaurantMenu;
