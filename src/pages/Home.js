import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>India’s Trusted Agriculture Store 🌱</h1>
          <p>
            Fresh Seeds, Fertilizers & Tools for Better Farming
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="btn primary">
              Shop Now
            </Link>
            <Link to="/products" className="btn secondary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">🚚 Free Delivery</div>
        <div className="feature-card">🌱 100% Organic</div>
        <div className="feature-card">👨‍🌾 Farmer Trusted</div>
        <div className="feature-card">💰 Best Prices</div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Top Categories</h2>

        <div className="category-grid">
          <div className="category-card">Seeds</div>
          <div className="category-card">Fertilizers</div>
          <div className="category-card">Tools</div>
          <div className="category-card">Pesticides</div>
        </div>
      </section>


      <section className="cta">
        <h2>Grow Better Crops with AgriMart 🌾</h2>
        <Link to="/products" className="btn-primary">
          Start Shopping
        </Link>
      </section>
   

    </div>
  );
};

export default Home;
