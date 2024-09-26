// src/components/HomePage.js
import React from 'react';
import '../styles/HomePage.css';
 
const HomePage = () => {
  return (
    <div className="home-container" style={{ backgroundImage: 'url("https://www.shutterstock.com/image-vector/phone-hangs-above-mirror-surface-260nw-2172048295.jpg")' }}>
      <section className="hero-banner">
        <h1 className="fade-in">New Smartphone</h1>
        <h2 className="fade-in">Compare Models</h2>
        <p className="fade-in">
          "Discover the latest technology at your fingertips.<br />
          Experience seamless connectivity like never before."
        </p>
        <div className="button-container">
          <button className="shop-now fade-in">Shop Now</button>
          <button className="read-more fade-in">Read More</button>
        </div>
      </section>
    </div>
  );
};
 
export default HomePage;