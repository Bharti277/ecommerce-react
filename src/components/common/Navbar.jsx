import React from "react";
import logo from "../../images/logo-full.png";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white">
      <nav className="flex items-center justify-between h-full px-20">
        <div className="">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="flex items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/">Featured</NavLink>
          </li>
          <li>
            <NavLink to="/">Recommended</NavLink>
          </li>
        </ul>
        <SearchBar />
        <ul className="flex">
          <li>Sign Up</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
