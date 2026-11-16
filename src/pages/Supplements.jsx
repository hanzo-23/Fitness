import React, { useState } from "react";
import "./Supplements.css";
import protein from '../pictures/whey.jpeg';
import creatine from '../pictures/creatine.jpeg';
import preworkout from '../pictures/preWorkout.jpeg';
import bcaa from '../pictures/bcaa.jpeg';

export const Supplements = () => {
  const [cart, setCart] = useState([]);
    
  const onBuy = (productName) => {
    setCart([...cart, productName]);
  };

  const products = [
    { name: "Protein Powder", image: protein, price: 50.99 },
    { name: "Creatine Monohydrate", image: creatine, price: 24.99 },
    { name: "Pre-Workout Supplement", image: preworkout, price: 39.99 },
    { name: "BCAA Amino Acids", image: bcaa, price: 29.99 },
  ];

  return (
    <div className="supp-content">
      <h1>Fitness <span>Supplements</span></h1>
      <p className="supp-cart">Items in cart: {cart.length}</p>
      {cart.length > 0 && (
        <ul className="supp-cart-list">
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
      <div className="supplements-products">
        {products.map((product) => (
          <div className="supp-product" key={product.name}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button type="button" onClick={() => onBuy(product.name)}>
              Buy now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};