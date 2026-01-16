import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="moving-bg"></div>

        <div className="about-overlay">
          <h1>About AgriMart</h1>
          <p>Empowering Farmers with Quality Seeds & Tools</p>

          <Link to="/products" className="about-btn">Explore Products</Link>
     
        </div>
      </section>


      {/* Who We Are */}
      <section className="about-section fade-in">
        <h2>Who We Are</h2>
        <p>
          AgriMart is an online agricultural marketplace providing
          high-quality seeds, fertilizers, and farming tools.
          We focus on helping Indian farmers grow better crops with
          trusted and affordable products.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-grid fade-in">
        <div className="about-card">
          <h3>🌱 Our Mission</h3>
          <p>
            To provide affordable, organic and reliable agricultural
            products that improve crop yield and farmer income.
          </p>
        </div>

        <div className="about-card">
          <h3>🚜 Our Vision</h3>
          <p>
            To become India’s most trusted agri e-commerce platform,
            supporting sustainable and modern farming.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us fade-in">
        <h2>Why Choose AgriMart?</h2>

        <div className="why-grid">
          <div className="why-card">✔ 100% Quality Products</div>
          <div className="why-card">✔ Organic & Eco-Friendly</div>
          <div className="why-card">✔ Farmer Trusted</div>
          <div className="why-card">✔ Affordable Pricing</div>
          <div className="why-card">✔ Fast Delivery</div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats fade-in">
        <div className="stat-box">
          <h3>10K+</h3>
          <p>Happy Farmers</p>
        </div>
        <div className="stat-box">
          <h3>500+</h3>
          <p>Products</p>
        </div>
        <div className="stat-box">
          <h3>4.8⭐</h3>
          <p>Customer Rating</p>
        </div>
      </section>

    </div>
  );
};

export default About;
