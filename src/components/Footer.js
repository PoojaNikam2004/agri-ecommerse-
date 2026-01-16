import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h2>🌾 AgriMart</h2>
          <p className="tagline">
            Grow Better, Harvest More
          </p>
          <p>
            India’s trusted agricultural seeds & fertilizer marketplace.
          </p>

          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Delivery Info</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>Get farming tips & offers 🌱</p>

          <div className="newsletter">
            <input type="email" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 AgriMart | Made for Farmers ❤️
      </div>
    </footer>
  );
};

export default Footer;
