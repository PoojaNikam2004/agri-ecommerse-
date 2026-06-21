import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import API from "../api";

const categories = [
  { label: "All", value: "all" },
  { label: "Vegetable ", value: "vegetables" },
  { label: "Fruit Seeds", value: "fruits" },
  { label: "Flower Seeds", value: "flowers" },
  { label: "Organic", value: "organic" },
  { label: "Tools", value: "tools" },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/products");

        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (error) {
        console.log("Product fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter Products
  useEffect(() => {
    let result = [...products];

    // Category Filter
    if (activeCategory !== "all") {
      result = result.filter(
        (product) =>
          product.category &&
          product.category.toLowerCase() ===
            activeCategory.toLowerCase()
      );
    }

    // Search Filter
    if (search.trim()) {
      result = result.filter((product) =>
        product.name
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [activeCategory, search, products]);

  return (
    <div className="products-container">
      <h1>Our Products</h1>

      {/* Search */}
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Buttons */}
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={
              activeCategory === cat.value ? "active" : ""
            }
            onClick={() =>
              setActiveCategory(cat.value)
            }
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && <h2>Loading Products...</h2>}

      {/* Product Grid */}
      {!loading && (
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
              >
                {product.image ? (
                  <img
                    src={`http://localhost:5000/uploads/${product.image}`}
                    alt={product.name}
                  />
                ) : (
                  <div className="no-image">
                    No Image
                  </div>
                )}

                <h3>{product.name}</h3>

                <p className="price">
                  ₹{product.price}
                </p>

                <Link to={`/product/${product.id}`} className="details-btn">View Details</Link>
              </div>
            ))
          ) : (
            <h3>No Products Found</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;