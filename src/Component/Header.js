import React, { useContext } from "react";
import "../Style/Header.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedin = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <header>
      <nav>
        <ul>
          {isLoggedin && (
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          )}
          {isLoggedin && (
            <li>
              <NavLink to="/store"> store</NavLink>
            </li>
          )}
          {isLoggedin && (
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          )}
          {isLoggedin && (
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          )}
          {!isLoggedin && (
            <li>
              <NavLink to="/login">Login Page</NavLink>
            </li>
          )}
          {isLoggedin && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
