import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ShimmerBody from "./ShimmerBody";

//utils
import { filterRests , customSort , getDataFromAPI} from "../utils/helper.js"
//customHooks
import useIsOnline from "../customHooks/useIsOnline.js"

const Body = () => {
  const [allRestaurants, setAllrestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const online=useIsOnline();

  useEffect(() => {
    getDataFromAPI(setAllrestaurants,setFilteredRestaurants);
  }, []);
  return (
    <>
    {online==true ? <>
        <div id="search-comp" className=" shadow-sm my-2 flex place-items-center h-10 ">
          <input
          className="focus:bg-blue-100 border border-black mx-4 w-[400px] shadow-lg h-10 rounded-sm"
            type="text"
            id="search-bar"
            placeholder="You can Filter here  ..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            autoComplete="off"
          />
          <button
            onClick={() => filterRests(searchText, allRestaurants,setFilteredRestaurants)}
            id="search-btn"
            className="bg-emerald-400 border border-black shadow-sm mx-2 rounded-sm w-24 h-10 text-xl"
          >
            🔍Search{" "}
          </button>
          <button
            id="sort-btn"
            className="bg-emerald-300  border border-black shadow-sm mx-2 rounded-sm w-24 h-10 text-xl"
            onClick={() => {
              customSort(filteredRestaurants,setAllrestaurants,setFilteredRestaurants);
            }}
          >
            Sort
          </button>
        </div>
        {filteredRestaurants.length == 0 ? (
          <ShimmerBody />
        ) : (
          <div id="body" className="flex flex-wrap justify-center">
            {filteredRestaurants?.map((restaurant, index) => (
              <RestaurantCard
                key={restaurant?.data?.uuid}
                resData={restaurant}
              ></RestaurantCard>
            ))}
          </div>
        )}
      </> : <h1>Check Your Internet Connection </h1>}
      
    </>
  );
};

export default Body;
