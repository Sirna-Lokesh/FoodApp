import React from "react"
import RestaurantMenu from "./RestaurantsMenu";

//custom component  imports 
import Header from "./Header";
import { Outlet } from "react-router-dom";
//custom hooks
import useIsOnline from "../customHooks/useIsOnline";
const AppLayout = () =>{
     const online = useIsOnline();
    return (
        <div id="app-layout">
            <Header></Header>
            {online == true ? <Outlet></Outlet> : <h1>Your Internet Connection is Either broken or not Stable , Please try Again </h1>}
        </div>
    )
}


export default AppLayout;