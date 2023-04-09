import React from "react"
import { Link } from "react-router-dom";
const removeUnderLine ={textDecoration:"none"}
const Navbar = () =>{
    return (
        <div id="navbar" className="w-[350px] flex items-center">
            <ul id="navigation-list " className="flex justify-evenly">
                <li className="px-2  mx-3 hover:bg-gray-300 cursor-pointer "><Link style={removeUnderLine} to="/about">About</Link></li>
                <li className="px-2  mx-3 hover:bg-gray-300 cursor-pointer"><Link style={removeUnderLine} to="/">Home </Link></li>
                <li className="px-2  mx-3 hover:bg-gray-300 cursor-pointer"><Link style={removeUnderLine} to="/contact">Contact</Link></li>
                <li className="px-2  mx-3 hover:bg-gray-300 cursor-pointer"><Link style={removeUnderLine} to="/rate">Rate  </Link></li>
            </ul>
        </div>
    )
}

export default Navbar;