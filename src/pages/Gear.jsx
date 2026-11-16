import React, { useState } from 'react';
import './Gear.css';
import bag from '../pictures/bag.jpeg';
import bands from '../pictures/bands.jpeg';
import belt from '../pictures/belt.jpeg';
import bottle from '../pictures/bottle.jpeg';
import gloves from '../pictures/gloves.jpeg';
import knee from '../pictures/knee.jpeg';
import parall from '../pictures/parall.jpeg';
import pd from '../pictures/pd.jpeg';
import pullup from '../pictures/pullup.jpeg';
import shaker from '../pictures/shaker.jpeg';
import strap from '../pictures/strap.jpeg';
import wraps from '../pictures/wraps.jpeg';

export const Gear = () => {
  const [cart, setCart] = useState([]);

  const onBuy = (productName) => {
    setCart([...cart, productName]);
  };
  const products = [
  {
    name: 'Gym Bag',
    image: bag,
    price: 39.99
  },
  {
    name: 'Resistance Bands',
    image: bands,
    price: 24.99
  },
  {
    name: 'Weightlifting Belt',
    image: belt,
    price: 39.99
  },
  {
    name: 'Water Bottle',
    image: bottle,
    price: 24.99
  },
 
  {
    name: 'Knee Sleeves',
    image: knee,
    price: 29.99
  },
  {
    name: 'Parallettes',
    image: parall,
    price: 49.99
  },
  {
    name: 'Push-up Handles',
    image: pd,
    price: 19.99
  },
  {
    name: 'Pull-up Bar',
    image: pullup,
    price: 34.99
  },
   {
    name: 'Training Gloves',
    image: gloves,
    price: 19.99
  },
  {
    name: 'Shaker Bottle',
    image: shaker,
    price: 14.99
  },
  {
    name: 'Wrist Straps',
    image: strap,
    price: 12.99
  },
  {
    name: 'Wrist Wraps',
    image: wraps,
    price: 16.99
  }
  ];

  return (
    <div className='gear-content'>
    <h1>Fitness <span>Gear</span></h1>

    <p className="gear-cart">Items in cart: {cart.length}</p>
    {cart.length > 0 && (
      <ul className="gear-cart-list">
        {cart.map((product, index) => (
          <li key={index}>{product}
          <button onClick={() => setCart(cart.filter((_, i) => i !== index))}>
            Remove
          </button> 
          </li>
        ))}
      </ul>
    )}
    <div className="gear-products">
      
      {products.map((product) => (

        <div className="gear-product" key={product.name}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button
            type="button"
            onClick={() => onBuy(product.name)}
          >
            Buy now
          </button>
        </div>

      ))}
    </div>
    </div>
  );
};
