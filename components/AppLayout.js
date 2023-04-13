import React from "react"
import RestaurantMenu from "./RestaurantsMenu";

//custom component  imports 
import Header from "./Header";
import { Outlet } from "react-router-dom";
//custom hooks
import useIsOnline from "../customHooks/useIsOnline";

//redux
import { Provider } from "react-redux";
import store from "../ReduxStore/Store";

const AppLayout = () =>{
     const online = useIsOnline();
    return (
        <Provider store = {store}>
            <div id="app-layout">
                <Header></Header>
                {online == true ? <Outlet></Outlet> : <h1>Your Internet Connection is Either broken or not Stable , Please try Again </h1>}
            </div>
        </Provider>
    )
}


export default AppLayout;