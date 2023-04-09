import React from "react";
import { CLOUD_IMAGE_URL } from "../config";

const goodRating = {
  backgroundColor: "green",
};
const badRating = {
  backgroundColor: "red",
};

const MenuItemCard = (props) => {
  const { title, FoodItem } = props;
  const imageId = FoodItem?.imageId;
  const price = FoodItem?.price;
  const avgRating = FoodItem?.ratings?.aggregatedRating?.rating;
  const name= FoodItem?.name;
  const description= FoodItem?.ratings?.aggregatedRating?.description;
  return (
    <div id="menu-item-container" className="flex flex-wrap w-[500px] h-[120px] border border-black m-2 justify-between">
      <div id="menu-item-info" className="mx-3 my-4">
        <h3 className="font-bold">Name : {name} </h3>
        <h4>{description}</h4>
        <h3>Price : {parseInt(price) / 100}</h3>
        <h3>Rating : {avgRating==null ? <span>No Rating </span> :<button
          id="rating-btn"
          className="w-[30px] text-base rounded-sm text-white"
          style={parseInt(avgRating) >= 4 ? goodRating : badRating}
        >
          {avgRating}
        </button>}</h3>
      </div>
      <div id="menu-item-image-container" className="my-[8px] mr-2">
        <img
          id="item-card-image"
          className="w-[100px] h-[100px]"
          src={CLOUD_IMAGE_URL + imageId}
          alt="Food-image"
        />
      </div>
    </div>
  );
};

export default MenuItemCard;
