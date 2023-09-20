import React, { useEffect, useState } from 'react'
import '../Style/Cart.css'
const Cart = ({cart,setCart}) => {

    const [price,setPrice]=useState(0);

    const handleTotalPrice=()=>{
    let ans=0;
    cart.map((item)=>(
      ans+=item.price
    ))
    setPrice(ans);
    }
  const handleRemove=(id)=>{
    const arr=cart.filter((item)=>item.id !== id);
    setCart(arr);
    handleTotalPrice();
  }

    useEffect(()=>{
      handleTotalPrice();
    })
  return (
    <article>
      { cart.map((item)=>(
        <div className='cart_box' key={ item.id} >
            <div className='cart_img'>
                <img  src={item.imageUrl} alt={item.title}/> 
                <p>{item.title}</p>             
            </div>
            <div>
                 <button>Qty. 1</button>
                 <span>Rs.{item.price}</span>

               </div>
            <div>
          
                <button onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>           
        </div>
    ))}
      
    <div className='total'>
        <span>Total Price</span>
        <span>Rs.{price}</span>
    </div>
    </article>
  )
}

export default Cart
