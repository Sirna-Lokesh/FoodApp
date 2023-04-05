import React from "react"
import { Link } from "react-router-dom";
const removeUnderLine ={textDecoration:"none"}
const Navbar = () =>{
    return (
        <div id="navbar">
            <ul id="navigation-list">
                <li><Link style={removeUnderLine} to="/about">About</Link></li>
                <li><Link style={removeUnderLine} to="/">Home </Link></li>
                <li><Link style={removeUnderLine} to="/contact">Contact</Link></li>
                <li><Link style={removeUnderLine} to="/rate">Rate  </Link></li>
            </ul>
        </div>
    )
}

export default Navbar;