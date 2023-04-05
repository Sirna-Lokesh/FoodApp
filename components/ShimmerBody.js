import React from "react";
import ShimmerCard from "./ShimmerCard";
const ShimmerBody = () => {
    return (
        <div id="shimmer-body">
            {Array(15).fill(1).map((e,index)=>{
                return <ShimmerCard key={index}></ShimmerCard>
            })}
        </div>
    )
}
export default ShimmerBody