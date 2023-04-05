import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import ShimmerBody from "./ShimmerBody";
const Body = () => {
  const [allRestaurants, setAllrestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  async function getDataFromAPI() {
    let APIData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await APIData.json();
    console.log(json);
    setAllrestaurants(json.data.cards[2].data.data.cards);
    setFilteredRestaurants(json.data.cards[2].data.data.cards);
  }

  //logic for filtering based on search

  async function filterRests(text, allRestaurants) {
    const afterFilteration = await allRestaurants?.filter((restaurant) => {
      if (restaurant?.data?.name?.toLowerCase().includes(text.toLowerCase())) {
        return restaurant;
      }
    });
    setFilteredRestaurants(afterFilteration);
    console.log(afterFilteration);
  }
  async function customSort(restaurants) {
    const sortingParameter = prompt(
      "choose sorting parameter : price-1 deliveryTime - 2 Rating -3"
    );
    if (sortingParameter == 1) {
      await restaurants.sort((r1, r2) => {
        if (parseInt(r1?.data?.costForTwo) > parseInt(r2?.data?.costForTwo)) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (sortingParameter == 2) {
      await restaurants.sort((r1, r2) => {
        if (
          parseInt(r1?.data?.minDeliveryTime) >
          parseInt(r2?.data?.minDeliveryTime)
        ) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (sortingParameter == 3) {
      await restaurants.sort((r1, r2) => {
        if (parseInt(r1?.data?.avgRating) > parseInt(r2?.data?.avgRating)) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    restaurants.map((rest) => console.log(rest?.data?.costForTwo));
    setFilteredRestaurants([...restaurants]);
    setAllrestaurants(restaurants);
  }
  useEffect(() => {
    getDataFromAPI();
  }, []);
  console.log("render");
  return (
    <>
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
          onClick={() => filterRests(searchText, allRestaurants)}
          id="search-btn"
        >
          🔍Search{" "}
        </button>
        <button
          id="sort-btn"
          onClick={() => {
            customSort(filteredRestaurants);
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
    </>
  );
};

export default Body;
