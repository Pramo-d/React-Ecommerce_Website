import React from "react";
import "../Style/Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/store">store</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact Us</NavLink>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;
