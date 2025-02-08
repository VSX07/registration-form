import React from 'react';
import './footer.css'; // Import external CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Your Company. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a> | 
        <a href="#">Terms of Service</a> | 
        <a href="#">Contact</a>
      </div>
      <div className="social-media">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
