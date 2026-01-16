import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const categories = [
  { label: "All", value: "all" },
  { label: "Vegetable Seeds", value: "vegetable" },
  { label: "Fruit Seeds", value: "fruit" },
  { label: "Flower Seeds", value: "flower" },
  { label: "Organic", value: "organic" },
  { label: "Tools", value: "tools" },
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://696355cc2d146d9f58d33410.mockapi.io/seeds")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    let result = products;

    if (activeCategory !== "all") {
      result = result.filter(
        (item) => item.category === activeCategory
      );
    }

    if (search) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  }, [activeCategory, search, products]);

  return (
    <div className="products-container">
      <h1>Our Products</h1>

      {/* 🔍 Search */}
      <input
        className="search-input"
        placeholder="Search seeds, tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🌱 Categories */}
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={activeCategory === cat.value ? "active" : ""}
            onClick={() => setActiveCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 🧺 Products */}
      <div className="products-grid">
        {filtered.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <Link to={`/product/${item.id}`} className="details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
