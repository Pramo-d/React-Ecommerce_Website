import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import Cart from "./Cart";
import axios from "axios";

function Shopping() {
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
    const userEmail=localStorage.getItem('email')
     axios.post(`https://crudcrud.com/api/b534e6c6ae17489caff11592a01f096a/user${userEmail}`,item)
     .then((res)=>{
      console.log(res.data)
      const cartWithId={...item, _id:res.data._id}
      setCart((prev)=>[...prev,cartWithId])
     })
    // setCart([...cart, item]);
  };
  
useEffect(()=>{
    const fetchItems= async()=>{
      try{
        const userMail= localStorage.getItem('email');
       const response= await axios.get(`https://crudcrud.com/api/b534e6c6ae17489caff11592a01f096a/user${userMail}`);
      setCart(response.data);
      }catch(err){
        console.log("Fetch Items failed- " + err);
      }
    }
    fetchItems();
  },[])
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
}

export default Shopping;
