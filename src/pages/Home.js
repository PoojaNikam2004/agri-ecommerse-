import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


export default function Home() {
return (
<div className="home-container">
{/* Hero Section */}
<section className="hero">
<h1>Fresh Seeds & Fertilizers for Every Farmer</h1>
<p>Your trusted agriculture marketplace</p>
<Link to="/products" className="hero-btn">Shop Now</Link>
</section>


{/* Categories */}
<section className="categories">
<h2>Top Categories</h2>
<div className="cat-grid">
<div className="cat-card" >Seeds</div>

<div className="cat-card">Fertilizers</div>
<div className="cat-card">Tools</div>
<div className="cat-card">Pesticides</div>
</div>
</section>


{/* Featured Products */}
<section className="featured">
<h2>Featured Products</h2>
<div className="product-grid">
<div className="product-card">Wheat Seeds – ₹299</div>
<div className="product-card">Rice Seeds – ₹349</div>
<div className="product-card">Organic Fertilizer – ₹499</div>
<div className="product-card">Garden Tool Set – ₹799</div>
</div>
</section>
</div>
);
}