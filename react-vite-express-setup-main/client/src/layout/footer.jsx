import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>©Second Best {new Date().getFullYear()}</p>
          <p>Designed and Built by Tehila Shoham</p>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/account">Sign In</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;