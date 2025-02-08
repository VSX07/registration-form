import React, { useState } from 'react';
import './navbar.css'; // Import external CSS file for styling

function Navbar() {
  const [fontSize, setFontSize] = useState(16); // Initial font size

  const handleFontSizeChange = (increment) => {
    setFontSize((prevSize) => prevSize + increment);
    document.body.style.fontSize = `${fontSize + increment}px`;
  };

  return (
    <div>
      {/* Logo section */}
      <div className="logo-container">
        <img src="/embellum.png" alt="Logo" className="logo" />
        <p>HACK-TU 6.O</p>

        <div className="search-and-font-container">
          {/* Search box */}
          <input type="text" className="search-box" placeholder="Search..." />

          {/* Font size adjuster */}
          <div className="font-size-adjuster">
            <button onClick={() => handleFontSizeChange(2)}>A+</button>
            <button onClick={() => handleFontSizeChange(-2)}>A-</button>
          </div>
        </div>
      </div>

      {/* Navbar links section */}
      <div className="navbar" style={{ fontSize: `${fontSize}px` }}>
        <div className="social">
          <a href="#">About</a>
          <a href="#">Examination</a>
          <a href="#">FAQs</a>
          <a href="#">Home</a>
          <a href="#">Address</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
