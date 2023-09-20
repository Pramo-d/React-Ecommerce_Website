import React from "react";
import "../Style/Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/" className="title"></NavLink>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/store" >store</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
