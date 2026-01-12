import React from "react";
import logo from "../../images/logo-full.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white">
      <nav className="flex items-center h-full px-20">
        <div className="">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="flex">
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
      </nav>
    </div>
  );
};

export default Navbar;
