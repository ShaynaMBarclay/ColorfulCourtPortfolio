import React from 'react';
import { FaInstagram } from 'react-icons/fa';


function Navbar() {
  const name = "Colorful.Court";

  return (
    <nav className="navbar">
      <h1>{name}</h1>
        
      <div className="navbar-buttons">
        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/colorful.court/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button"
        >
          <FaInstagram />
        </a>

        {/* Book Here Button */}
        <a href="https://colorfulcourt.glossgenius.com/services" className="navbar-button">
          Book Here
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
