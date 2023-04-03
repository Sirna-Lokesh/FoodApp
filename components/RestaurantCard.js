import React from "react"

const CLOUD_URL="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/"
const RestaurantCard = (props) =>{
   
    const avgRating=props?.resData?.data?.avgRating;
    const cuisines=props?.resData?.data?.cuisines;
    const cloudinaryImageId=props?.resData?.data?.cloudinaryImageId;
    const costForTwo=props?.resData?.data?.costForTwo;
    const minDeliveryTime=props?.resData?.data?.minDeliveryTime;
    const name=props?.resData?.data?.name;


    //style for rating
    const goodRating={
        backgroundColor:"green"
    }
    const badRating={
        backgroundColor:"red"
    }
    return (
        <div id="card">
            <img id="food-image" src={`${CLOUD_URL}${cloudinaryImageId}`} alt="Food Item" />
            <div id="food-info">
                <h2>{name} </h2> <button id="rating-btn" style={parseInt(avgRating)>=4 ? goodRating :badRating}>{avgRating}</button>
                <h5>{cuisines?.map((item)=>item+"-")}</h5>
                <h3>Time : {minDeliveryTime} Mins</h3>
                <h3>Price : {parseInt(costForTwo)/100} INR only/-</h3>
               
            </div>
        </div>
    )
}

export default RestaurantCard;