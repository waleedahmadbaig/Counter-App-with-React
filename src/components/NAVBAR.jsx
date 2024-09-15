import React, { useState } from 'react';
import '../style/navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">Counter Website</h3>
      <ul className={isMenuOpen ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMenuOpen(false)}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
}

export default Navbar;
