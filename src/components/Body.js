// import { resData } from "../utils/resData";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";


const Body = () => {
  const [resFilter, setresFilter] = useState([]);
  const [rating, setRating] = useState(0);


  useEffect(()=>{
    fetchData();
  },[])
  const fetchData= async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5659013&lng=77.4902726&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const dataJson=await data.json();
    setresFilter(dataJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  if(resFilter.length===0){
    return <h1>Loading...</h1>
  }
  return (
    <div className="body-cont">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for Restaurant and Foods"
        />
      </div>
      <div className="filter">
        <select
          name="filter"
          id="filter-sel" defaultValue="select"
          onChange={(event) => setRating(event.target.value)}
        >
          <option value="0">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="4.5">4.5</option>
        </select>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = resData.filter(
              (res) => res.info.avgRating >=  parseFloat(rating)
            );
            setresFilter(filteredList);
            console.log(filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="cards-cont">
        {resFilter.map((res) => {
          return <ResCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;