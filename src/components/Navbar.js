import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const Navbar = () => {
  const { cartItems = [] } = useCart();
  const [openProfile, setOpenProfile] = useState(false);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  

  const user = {
    name: "POOJA",
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        🌾 Agrimart
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
        <Link to="/about">About</Link>

        {/* Cart */}
        <Link to="/cart" className="cart-link">
          Cart
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>

        <Link to="/order" className="order">Order</Link>
        <Link to="/MyOrder" className="order">MyOrder</Link>
        <Link to="/OrderSuccess" className="order">Payment</Link>




        {/* PROFILE */}
        {user ? (
          <div
            className="profile-wrapper"
            onClick={() => setOpenProfile(!openProfile)}
          >
            <div className="profile-circle">
              {user.name.charAt(0)}
            </div>

            {openProfile && (
              <div className="profile-dropdown">
                <p className="username">👤 {user.name}</p>
                <hr />
                <Link to="/profile">Profile</Link>
                <Link to="/Order">My Orders</Link>
                <Link to="/About">Address</Link>
                <hr />
                <p className="logout">🚪 Logout</p>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
