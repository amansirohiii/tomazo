import { RES_API } from "../utils/constants";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
  const handleSearch = () => {
    const searchRes = originalData.filter(
      (data) =>
        data.info.name
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        data.info.cuisines
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );
    setResFilter(searchRes);
  };

  useEffect(()=> {
    let filteredList = originalData.filter(
      (res) => res.info.avgRating >= parseFloat(rating)
    );
    if (filteredList.length === 0) {
      setResFilter([]);
    } else {
      setResFilter(filteredList);
    }
    console.log(filteredList);
  },[rating]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Not connected to Internet!!!</h1>;
  return (
    <div className="body-cont">
      <div className="m-10 flex justify-center">
        <input
          className="mx-10 border border-solid border-black w-1/5"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          className="bg-slate-500 px-4 py-1 text-white rounded-lg"
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>

      <div className="my-10 px-32 flex justify-end">
        <select
          name="filter"
          className="bg-gray-50 border border-gray-300 rounded-lg w-24 py-2 text-center"
          defaultValue="select"
          onChange={(event) => {setRating(event.target.value)
          // handleFilter();
          }}
        >
          <option value="0">Filter</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="4.5">4.5</option>
        </select>
        {/* <button
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
        </button> */}
      </div>
      <div className="px-10 flex flex-wrap">
        {loading ? (
          <Shimmer />
        ) : (
          resFilter.map((res) => {
            return (
              <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
                <ResCard resData={res} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Body;
