import React from 'react';
import "./shop.css";
import { FaDumbbell } from "react-icons/fa6";
import { MdBeenhere } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const Shop = () => {
  const navigate = useNavigate();

  return (

    <div className="shop-container">

<div className="header">

  <div className='caption'>
  <p>GEAR UP FOR A STRONGER TOMORROW</p>
  <h1>PREMIUM FITNESS </h1>
  <h1><span>GEAR</span></h1>
  <p>Elevate your fitness journey with our premium gear collection.</p>
  <button className='shop-t' onClick={()=> navigate('/Gear')}> Shop Now</button>

  </div>
</div>

<div className='footer'>

    <div className='quality'>
       <FaDumbbell />
    <p>HIGH QUALITY</p>
</div>

<div className='built'>
     <MdBeenhere />
    <p>BUILT TO LAST</p>
</div>

<div className='fast'>
<FaShippingFast />
 <p>FAST DELIVERY</p>
</div>
</div>

</div>
  );
}

