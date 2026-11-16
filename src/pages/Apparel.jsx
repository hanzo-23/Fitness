import React, { useState } from 'react';
import './Apparel.css';
import shirt  from '../pictures/shirt.jpeg';
import short from '../pictures/short.jpeg';
import hoodie from '../pictures/hoodie.jpeg';
import bra from '../pictures/bra.jpeg';
import hat from '../pictures/hat.jpeg';
import pent from '../pictures/pent.jpeg';


export const Apparel=()=> {

    const [cart, setCart] = useState([]);
      
    const onBuy = (productName) => {
      setCart([...cart, productName]);
    };

const products = [
    { name: "pent", image: pent, price: 24.99 },
    { name: "short", image: short, price: 17.99 },
    { name: "shirt", image: shirt, price: 24.99 },
    { name: "hoodie", image: hoodie, price: 25.99 },
  ];

  return (

    <div className="page-content">

       <div className="app-content">
      <h1>Fitness <span>Apparel</span></h1>
      <p className="app-cart">Items in cart: {cart.length}</p>
      {cart.length > 0 && (
        <ul className="app-cart-list">
          {cart.map((product, index) => (
            <li key={index}>
              {product}
              <button onClick={() => setCart(cart.filter((_, i) => i !== index))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
     
      <div className="apparel-products">
        {products.map((product) => (
          <div className="apparel-product" key={product.name}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => onBuy(product.name)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}


 
