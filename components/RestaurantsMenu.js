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
  const [filteredMenuItems,setFilteredMenuItems] = useState(null);

  const [text,setText]=useState("");
  //style for rating
  const goodRating = {
    backgroundColor: "green",
  };
  const badRating = {
    backgroundColor: "red",
  };
  async function filterMenuItems(setFilteredMenuItems,AllMenuItems,searchText){
    
    const afterFilteration = AllMenuItems.filter((menuItem)=>{
      if(menuItem?.card?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())){
        return menuItem;
      }
    })
    setFilteredMenuItems([...afterFilteration])
  }

  async function getRestaurantMenu() {
    const data = await fetch(REST_MENU_URL + restaurantId);
    const json = await data.json();
    setRestaurantMenu(json);
    //console.log(json);
    //console.log(json?.data?.cards[0]?.card?.card?.info);
    let menuData =
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
        ?.card?.card?.itemCards;
    if(menuData==undefined){
      menuData=json?.data?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards;
    }
    setAllMenuItems(menuData);
    setFilteredMenuItems(menuData);
    console.log(menuData);
  }
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  return (
    <>
      {restaurantMenu != null ? (
        <>
          <div id="restaurant-menu" className="h-[280px] flex justify-evenly w-[800px] ml-16">
            <div id="restaurant-image" className=" border border-black w-[220px] h-[220px] flex justify-center items-center mt-6">
              <img
                id="restaurant-menu-image"
                src={CLOUD_IMAGE_URL + cloudinaryImageId}
                alt=" The Hotel Image "
                className="w-[200px] h-[200px] m"
              />
            </div>

            <div id="restaurant-info" className="mt-10">
              <h1 className="font-bold text-xl">Restaurant Name : {name}</h1>{" "}
              <h3>
                Aggregated Rating  : 
                <button
                  className="w-[40px] text-base rounded-sm text-white ml-1"
                  id="rating-btn"
                  style={parseInt(avgRating) >= 4 ? goodRating : badRating}
                >
                  {avgRating}
                </button>
                
              </h3>
              <h3>
                Cuisines :
                {cuisines ? cuisines.map((item) => " - " + item) : " menu "}
              </h3>
              <h3>Cost : {parseInt(costForTwo) / 100} For 2 </h3>
              <h3>Minimum Delivery Time :{minDeliveryTime} Mins </h3>
              <div className="flex  w-[500px]">
                <input className="border border-black w-[400px] shadow-lg h-9 rounded-sm mt-4 mr-2" type="text" value={text} onChange={(e)=>setText(e.target.value)} />
                <button className="bg-violet-600 text-white rounded-md w-16 h-9 mt-4" onClick={()=>filterMenuItems(setFilteredMenuItems, AllMenuItems ,text)}>Search</button>
              </div>
            </div>
          </div>
          <div className="w-[1000px] mx-auto bg-black h-[2px] mb-4"></div>
          <div id="menu" className="flex flex-wrap justify-center" data-testid="menu-items">
            {filteredMenuItems != null ? (
              filteredMenuItems?.map((menuItem,index) => {
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
           
          </div>
        </>
      ) : (
        <ShimmerBody />
      )}
    </>
  );
};

export default RestaurantsMenu;


/**
 * install react-testing library and jest
 * configure jest (npx jest --init)
 * install jest-environment-jsdom
 * 
 * create first test
 * 
 * 
 * 
 */
