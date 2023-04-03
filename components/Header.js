import React from "react"

import Navbar from "./Navbar"

const Header = () => {
    return (
        <div id="header">
            <img id="logo" alt="logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"/>
            <Navbar></Navbar>
            <button id="login-btn">Login</button>
        </div>
    )
}

export default Header;