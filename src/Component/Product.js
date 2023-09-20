import React from 'react'
 
import Cards from './Cards';

const Product = ({handleClick}) => {

    const productsArr = [
        {
          id:'Colors',
          title: "Colors",
    
          price: 100,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
    
        {
          id:'Black and white Colors',
          title: "Black and white Colors",
    
          price: 50,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
    
        {
          id:'Yellow and Black Colors',
          title: "Yellow and Black Colors",
    
          price: 70,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
    
        {
          id:'Blue Color',
          title: "Blue Color",
    
          price: 100,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
      ];

  return (
    < section>
    {productsArr.map((item) =>
     <Cards item={item} key={item.id} handleClick={handleClick}/>
    )}
    </section>
  )
}

export default Product
