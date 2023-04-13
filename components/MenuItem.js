import React from "react";
import { CLOUD_IMAGE_URL } from "../config";

//redux
import { useDispatch } from "react-redux"
import { addItem } from "../ReduxStore/CartSlice";


const goodRating = {
  backgroundColor: "green",
};
const badRating = {
  backgroundColor: "red",
};

const MenuItemCard = (props) => {
  const dispatch = useDispatch();
  const handleAddItems = (data) =>{
    dispatch(addItem(data));
    
  }
  const { title, FoodItem } = props;
  const imageId = FoodItem?.imageId;
  const price = FoodItem?.price;
  const avgRating = FoodItem?.ratings?.aggregatedRating?.rating;
  const name= FoodItem?.name;
  return (
    <div id="menu-item-container" className="bg-gray-200 bg-opacity-50  flex flex-wrap w-[500px] h-[150px] border border-black m-2 justify-between">
      <div id="menu-item-info" className="mx-3 my-4">
        <h3 className="font-bold">Name : {name} </h3>
        <h3>Price : {parseInt(price) / 100}</h3>
        <h3>Rating : {avgRating==null ? <span>No Rating </span> :<button
          id="rating-btn"
          className="w-[30px] text-base rounded-sm text-white"
          style={parseInt(avgRating) >= 4 ? goodRating : badRating}
        >
          {avgRating}
        </button>}</h3>
        <button className="bg-blue-300 m-1 p-1 border border-black" onClick={()=>handleAddItems({imageId,price,name,avgRating})}> Add-Item </button>
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
