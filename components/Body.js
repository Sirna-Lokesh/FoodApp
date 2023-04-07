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
        <div id="search-comp">
          <input
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
          >
            🔍Search{" "}
          </button>
          <button
            id="sort-btn"
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
          <div id="body">
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
