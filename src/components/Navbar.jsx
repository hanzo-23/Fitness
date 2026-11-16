import React from "react";
import logo from "../pictures/logo.png";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";
import { ThemeContext } from "../context/ThemContext";
import { useContext } from "react";
import white from "../pictures/logo-white.png";

export const Navbar = ({isLoggedIn, setTheme}) => {

const { theme } = useContext(ThemeContext);

 const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className="navbar">
      
      <h2 className="logo">

        {  theme === 'dark' ? (
          <NavLink className="theme-dark" to="/"><img src={logo} alt="Logo" /></NavLink>
        ) : (
          <NavLink className="theme-light" to="/"><img src={white} alt="Logo" /></NavLink>
        )}

      </h2>
        

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
       
 {isLoggedIn && (
        <NavLink
          to="/Exercises"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
         Exercises
        </NavLink>)}
 {isLoggedIn && (
        <NavLink
          to="/Meals"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Meals
        </NavLink>)}


         <div className="shop">

        <NavLink
          to="/Shop"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Shop
        </NavLink>

        <ul className="shop-menu">
          <li><NavLink to="/Gear">Gear</NavLink></li>
          <li><NavLink to="/Apparel">Apparel</NavLink></li>
          <li><NavLink to="/Supplements">Supplements</NavLink></li>
        </ul>

       </div>
    



       {isLoggedIn ? ( <NavLink to="/Profile">MyProfile</NavLink>):(
       <NavLink  to="/Login" className={({ isActive }) => (isActive ? "active" : "")}>
        Login
       </NavLink>)}

        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact Us
        </NavLink>
      </div>

      <div className={`theme ${theme === 'dark' ? 'dark' : 'light'}`}>
        <button className="theme-button" onClick={()=>{setTheme(theme === 'dark' ? 'light' : 'dark')}}>
          {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
        </button>
      </div>
    
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button> <IoSearchSharp /></button>
      </div>
    
        

       <div className="burger" onClick={() => setIsOpen(!isOpen)}>
       {isOpen ? <FaTimes /> : <FaBars />}


       </div>
  
     </div>

    
  );
};
