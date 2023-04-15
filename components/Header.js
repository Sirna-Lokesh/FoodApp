import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
//redux
import { useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti"
const Header = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  return (
    <div
      id="header"
      className="flex  border border-black justify-between items-center shadow-md mb-3 mt-1"
    >
      <img
        data-testid="logo"
        className="w-32"
        id="logo"
        alt="logo"
        src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
      />
      <Navbar data-testid="navigation-bar"></Navbar>
      <Link to={"/cart"}>
        <div className="cart-icon flex">
            <TiShoppingCart size={54} color="black" />
            <span data-testid="cart-length" className="text-2xl text-red-500">{cartItems.length}</span>
        </div>
    </Link>

      <button className="bg-blue-400 rounded-md w-14 h-8 mx-11" id="login-btn">
        Login
      </button>
    </div>
  );
};

export default Header;
