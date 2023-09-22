import React from "react";
import "../Style/Navbar.css";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="my_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Shopping Cart
        </span>

        <div className="cart" onClick={() => setShow(false)}>
          <span>Cart</span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
