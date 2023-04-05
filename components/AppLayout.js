import React from "react"
import RestaurantMenu from "./RestaurantsMenu";

//custom component  imports 
import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";
const AppLayout = () =>{
    return (
        <div id="app-layout">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}


export default AppLayout;