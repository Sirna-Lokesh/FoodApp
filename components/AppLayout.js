import React from "react"

//custom component  imports 
import Header from "./Header";
import Body from "./Body";
const AppLayout = () =>{
    return (
        <div id="app-layout">
            <Header></Header>
            <Body></Body>
        </div>
    )
}

export default AppLayout;