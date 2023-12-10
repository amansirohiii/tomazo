import { RES_API } from "../utils/constants";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resFilter, setResFilter] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_API);
      const dataJson = await data.json();
      const restaurants =
        dataJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setOriginalData(restaurants);
      setResFilter(restaurants);
      setLoading(false);
      // console.log(restaurants);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSearch=()=>{
    const searchRes = originalData.filter((data) =>
              data.info.name.toString().toLowerCase().includes(searchText.toLowerCase()) || data.info.cuisines.toString().toLowerCase().includes(searchText.toLowerCase())
            );
            setResFilter(searchRes);
  }

  return (
    <div className="body-cont">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }} onKeyDown={(e)=>{
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <select
          name="filter"
          id="filter-sel"
          defaultValue="select"
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
            let filteredList = originalData.filter(
              (res) => res.info.avgRating >= parseFloat(rating)
            );
            if (filteredList.length === 0) {
              setResFilter([]);
            } else {
              setResFilter(filteredList);
            }
            console.log(filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="cards-cont">
        {loading ? (
          <Shimmer />
        ) : (
          resFilter.map((res) => {
            return <Link to={"/restaurants/" +res.info.id} key={res.info.id}><ResCard resData={res} /></Link> ;
          })
        )}
      </div>
    </div>
  );
};
export default Body;
