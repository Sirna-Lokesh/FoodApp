import React from "react";
import ShimmerCard from "./ShimmerCard";
const ShimmerBody = () => {
    return (
        <div id="shimmer-body" className="flex flex-wrap justify-center" data-testid="shimmer-container">
            {Array(12).fill(1).map((e,index)=>{
                return <ShimmerCard key={index}></ShimmerCard>
            })}
        </div>
    )
}
export default ShimmerBody