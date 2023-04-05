import React from "react"
import { Link } from "react-router-dom";
const CLOUD_URL="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/"
const RestaurantCard = (props) =>{
   
    const avgRating=props?.resData?.data?.avgRating;
    const cuisines=props?.resData?.data?.cuisines;
    const cloudinaryImageId=props?.resData?.data?.cloudinaryImageId;
    const costForTwo=props?.resData?.data?.costForTwo;
    const minDeliveryTime=props?.resData?.data?.minDeliveryTime;
    const name=props?.resData?.data?.name;
    const id=props?.resData?.data?.id;

    //style for rating
    const goodRating={
        backgroundColor:"green"
    }
    const badRating={
        backgroundColor:"red"
    }
    return (
        <div id="card">
            <Link to={"restaurants/"+id}><img id="food-image" src={`${CLOUD_URL}${cloudinaryImageId}`} alt="Food Item" /></Link>
            <div id="food-info">
                <h2 id="restaurant-name">{name}  <button id="rating-btn" style={parseInt(avgRating)>=4 ? goodRating :badRating}>{avgRating}</button></h2>
                <h5>{cuisines?.map((item)=>item+"-")}</h5>
                <h3>Time : {minDeliveryTime} Mins</h3>
                <h3>Price : {parseInt(costForTwo)/100} INR only/-</h3>
            </div>
        </div>
    )
}

export default RestaurantCard;