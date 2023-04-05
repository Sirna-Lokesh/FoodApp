import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { REST_MENU_URL } from "../config";
import { CLOUD_IMAGE_URL } from "../config";

import ShimmerBody from "./ShimmerBody";
import MenuItemCard from "./MenuItem";
const RestaurantsMenu = (props) => {
  const restaurantId = useParams().id;
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  const avgRating = restaurantMenu?.data?.cards[0]?.card?.card?.info?.avgRating;
  const cuisines = restaurantMenu?.data?.cards[0]?.card?.card?.info?.cuisines;
  const cloudinaryImageId =
    restaurantMenu?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId;
  const costForTwo =
    restaurantMenu?.data?.cards[0]?.card?.card?.info?.costForTwo;
  const name = restaurantMenu?.data?.cards[0]?.card?.card?.info?.name;

  const minDeliveryTime =
    restaurantMenu?.data?.cards[0]?.card?.card?.info?.sla?.minDeliveryTime;

  //menu-items data
  const [AllMenuItems, setAllMenuItems] = useState(null);

  //style for rating
  const goodRating = {
    backgroundColor: "green",
  };
  const badRating = {
    backgroundColor: "red",
  };

  async function getRestaurantMenu() {
    const data = await fetch(REST_MENU_URL + restaurantId);
    const json = await data.json();
    setRestaurantMenu(json);
    console.log(json);
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    const menuData =
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
        ?.card?.card?.itemCards;
    setAllMenuItems(menuData);
    console.log(menuData);
  }
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  return (
    <>
      {restaurantMenu != null ? (
        <>
          <div id="restaurant-menu">
            
            <div id="restaurant-image">
              <img
                id="restaurant-menu-image"
                src={CLOUD_IMAGE_URL + cloudinaryImageId}
                alt=" The Hotel Image "
              />
            </div>

            <div id="restaurant-info">
              <h1>Restaurant Name : {name}</h1>{" "}
              <h3>Aggregated Rating :<button
                id="rating-btn"
                style={parseInt(avgRating) >= 4 ? goodRating : badRating}
              >
                {avgRating}
              </button></h3>
              <h3>Cuisines : 
                {cuisines ? cuisines.map((item) => " - " + item) : " menu "}
              </h3>
              <h3>Cost : {parseInt(costForTwo) / 100} For 2 </h3>
              <h3>Minimum Delivery Time :{minDeliveryTime} Mins </h3>
            </div>
            
          </div>
          <div id="menu">
            {AllMenuItems != null ? (
              AllMenuItems?.map((menuItem, index) => {
                return (
                  <MenuItemCard
                    key={index}
                    FoodItem={menuItem?.card?.info}
                  ></MenuItemCard>
                );
              })
            ) : (
              <h1>No Items </h1>
            )}
            {/* <MenuItemCard title={AllMenuItems?.title} FoodItem={AllMenuItems?.itemCards[0]?.card?.info}></MenuItemCard> */}
          </div>
        </>
      ) : (
        <ShimmerBody />
      )}
    </>
  );
};

export default RestaurantsMenu;
