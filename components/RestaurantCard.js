import React from "react"
import { Link } from "react-router-dom";
import { CLOUD_IMAGE_URL } from "../config";

//utils 
import { goodRating , badRating } from "../utils/helper.js"

const RestaurantCard = (props) =>{
   
    const avgRating=props?.resData?.data?.avgRating;
    const cuisines=props?.resData?.data?.cuisines;
    const cloudinaryImageId=props?.resData?.data?.cloudinaryImageId;
    const costForTwo=props?.resData?.data?.costForTwo;
    const minDeliveryTime=props?.resData?.data?.minDeliveryTime;
    const name=props?.resData?.data?.name;
    const id=props?.resData?.data?.id;

    
    return (
        <div id="card" className=" border border-black shadow-lg w-[200px] m-2 hover:border-2 hover:rounded-md h-[400px] overflow-auto hover:border-red-800">
            <Link to={"restaurants/"+id}><img className="w-[150px] h-[150px] mx-6 my-4" id="food-image" src={`${CLOUD_IMAGE_URL }${cloudinaryImageId}`} alt="Food Item" /></Link>
            <div className="h-[1px] w-full bg-black mb-[2px] mx-auto"></div>
            <div id="food-info" className="ml-2">
                <h2 className="font-bold text-xl" id="restaurant-name">{name}  <button className="text-xs rounded-sm w-8 text-white" id="rating-btn" style={parseInt(avgRating)>=4 ? goodRating :badRating}>{avgRating}</button></h2>
                <h5>{cuisines?.map((item)=>item+"-")}</h5>
                <h3>Time : {minDeliveryTime} Mins</h3>
                <h3>Price : {parseInt(costForTwo)/100} INR only/-</h3>
            </div>
        </div>
    )
}

export default RestaurantCard;