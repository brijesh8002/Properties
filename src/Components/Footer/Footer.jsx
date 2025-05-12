import React from "react";
import "./Footer.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Sections */}

        {/* Contact Us */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
          <li>+910000000000</li>
          <li>abc12345@gmail.com</li>
          <li>Address, city / India</li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
           <Link to={"/"}> <li>Home</li></Link>
            <Link to={"/Listing"}><li>Add Listing</li></Link>
            <li>Rent</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li>Knowledge Base</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-button">
            <h3>Laali Properties</h3>
         <Link to={"/Contact"}> <button>Contact Us</button></Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        <p>Privacy Policy || Use of terms</p>
      </div>
    </footer>
  );
};

export default Footer;
