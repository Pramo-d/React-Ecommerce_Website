import React from "react";
import "../Style/Cards.css";

const Cards = ({ item, handleClick }) => {
  const { title, imageUrl, price } = item;
  
  return (
    <div className="cards">
      <div className="image_box">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Price.Rs{price}</p>
        <button onClick={() => handleClick(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Cards;
