import React from "react"

import Navbar from "./Navbar"

const Header = () => {
    return (
        <div id="header" className="flex  border border-black justify-between items-center shadow-md mb-3 mt-1">
            <img className="w-32" id="logo" alt="logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"/>
            <Navbar></Navbar>
            <button className="bg-blue-400 rounded-md w-14 h-8 mx-11" id="login-btn">Login</button>
        </div>
    )
}

export default Header;