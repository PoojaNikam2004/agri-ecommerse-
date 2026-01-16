import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Productdetails.css";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useCart();


  useEffect(() => {
    fetch(`https://696355cc2d146d9f58d33410.mockapi.io/seeds/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div className="detail-container">
      <div className="detail-card">
        <div className="detail-image">
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "300px", objectFit: "contain" }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400";
            }}
          />

        </div>

        <div className="detail-info">
          <h1>{product.name}</h1>
          <h2>₹{product.price}</h2>

          <p className="desc">
            🌱 High quality agricultural product for better crop growth.
            Suitable for Indian farming conditions.
          </p>

          <ul>
            <li>✔ 100% Organic</li>
            <li>✔ Fast Growth</li>
            <li>✔ Farmer Trusted</li>
          </ul>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
