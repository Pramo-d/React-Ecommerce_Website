import React, { useState } from "react";
import "../App.css";
import Navbar from "../Component/Navbar";
import Product from "../Component/Product";
import Cart from "../Component/Cart";

const Store = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarnig] = useState(false);

  const handleClick = (item) => {
    // console.log(item);
    // setCart([...cart,item]);

    let isPresent = false;

    cart.forEach((product) => {
      if (item.title === product.title) isPresent = true;
    });

    if (isPresent) {
      setWarnig(true);
      setTimeout(() => {
        setWarnig(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };
  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Product handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}

      {warning && (
        <div className="warning">Item is already added tour cart</div>
      )}
    </React.Fragment>
  );
};

export default Store;
