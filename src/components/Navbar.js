import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems = [] } = useCart();

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        🌾 AgriMart
        <span>Grow Better, Harvest More</span>
      </div>

      {/* Search */}
      <div className="search-box">
        <input type="text" placeholder="Search seeds, crops..." />
      </div>

      {/* Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/About">About</Link>

        <Link to="/cart" className="cart-link">
          Cart
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>

        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
