import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory =({data, showItems, setShowIndex})=>{
    // console.log(data)
    const handleClick=()=>{
        // console.log("click")
        setShowIndex();
    }
    return(
        <div className="w-6/12 p-4 m-auto bg-gray-10 shadow-lg my-2 border-gray-400 border-b-2">
            <div className="flex justify-between cursor-pointer select-none" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {showItems && <ItemList key={data.id} items={data.itemCards}/>}
        </div>

    )
}
export default RestaurantCategory;