import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/Cart.css";
const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handleTotalPrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.price));
    setPrice(ans);
  };
  
  const handleRemove = (id) => {
   
    const userMail = localStorage.getItem("email");
    axios
      .delete(
        `https://crudcrud.com/api/b534e6c6ae17489caff11592a01f096a/user${userMail}/${id}`
      )
      .then((res) => {
        const arr = cart.filter((item) => item._id !== id);
        setCart(arr);
        handleTotalPrice();
      })
      .catch((error) => {
        console.log("Error occurred during delete request:", error);
      });
  };

  useEffect(() => {
    handleTotalPrice();
  });
  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}</p>
          </div>
          <div>
            <button>Qty. 1</button>
            <span>Rs.{item.price}</span>
          </div>
          <div>
            <button onClick={() => handleRemove(item._id)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="total">
        <span>Total Price</span>
        <span>Rs.{price}</span>
      </div>
    </article>
  );
};

export default Cart;
