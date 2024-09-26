// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { AiOutlineLogin, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <input type="text" className="search-bar" placeholder="Search here..." />
      </div>
      <div className="navbar-right">
        <Link to="/wishlist" className="nav-icon-button">
          <AiOutlineHeart />
        </Link>
        <Link to="/cart" className="nav-icon-button">
          <AiOutlineShoppingCart />
        </Link>
        <Link to="/profile" className="nav-icon-button">
          <AiOutlineUser />
        </Link>
        <Link to="/login" className="nav-icon-button">
          <AiOutlineLogin />
        </Link>
        <Link to="/register" className="nav-icon-button">🔑</Link>
      </div>
    </nav>
  );
};
 
export default Navbar;
 
 