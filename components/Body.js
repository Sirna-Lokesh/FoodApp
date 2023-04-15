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
        <div id="search-comp" className=" mt-2 mb-3 flex place-items-center h-10  ">
          <input
          data-testid="input-box"
          className="border border-black mx-4 w-[400px] shadow-lg h-10 rounded-sm"
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
            data-testid="search-rest-button"
            id="search-btn"
            className="bg-violet-600 text-white border border-black shadow-sm mx-2 rounded-lg w-24 h-9"
          >
            Search
          </button>
          <button
            id="sort-btn"
            className="bg-violet-600 text-white border border-black shadow-sm mx-2 rounded-lg w-24 h-9"
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
          <div id="body" className="flex flex-wrap justify-center" data-testid="restaurant-list">
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
