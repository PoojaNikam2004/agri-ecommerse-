<<<<<<< HEAD
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../pages/Productdetails.css"; 
import wheatImg from "../assets/wheat.jpg";
import wheat1Img from "../assets/wheat1.jpg";
import wheat2Img from "../assets/wheat2.jpg";


// SAME product list as Products.jsx (important!)
const productData = [
  { id: 1, name: "Wheat Seeds", price: 299, img: wheatImg, desc: "High-quality wheat seeds suitable for all soil types." },
  { id: 2, name: "Rice Seeds", price: 349, img: wheat1Img, desc: "Premium rice seeds with high yield capacity." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: wheat2Img, desc: "100% natural fertilizer to boost crop growth." },
  { id: 4, name: "Pesticide Spray", price: 699, img: "/rice.jpg", desc: "Effective pesticide for crop protection." },
  { id: 5, name: "Garden Tools Kit", price: 899, img: "/rice1.jpg", desc: "Complete gardening tool kit for farmers." },
  { id: 6, name: "Corn Seeds", price: 259, img: "/rice2.jpg", desc: "Healthy and strong corn seeds for farming." },
  { id: 6, name: "Corn Seeds", price: 259, img: "/corn.jpg", desc: "Healthy and strong corn seeds for farming." },
  { id: 6, name: "Corn Seeds", price: 259, img: "/corn1.jpg", desc: "Healthy and strong corn seeds for farming." },
  { id: 6, name: "Corn Seeds", price: 259, img: "/corn2.jpg", desc: "Healthy and strong corn seeds for farming." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: "/org.jpg", desc: "100% natural fertilizer to boost crop growth." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: "/org1.jpg", desc: "100% natural fertilizer to boost crop growth." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: "/org2.jpg", desc: "100% natural fertilizer to boost crop growth." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: "/org3.jpg", desc: "100% natural fertilizer to boost crop growth." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: "/org3.jpg", desc: "100% natural fertilizer to boost crop growth." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: "/org3.jpg", desc: "100% natural fertilizer to boost crop growth." },
];

export default function Productdetails() {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "20px" }}>Product Not Found</h2>;
  }

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        background: "#ffe6f3",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "white",
          width: "80%",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
          display: "flex",
          gap: "25px",
        }}
      >
        {/* Image */}
        <img
          src={product.img}
          alt={product.name}
          style={{
            width: "40%",
            borderRadius: "15px",
            objectFit: "cover",
          }}
        />

        {/* Right info */}
        <div style={{ flex: 1 }}>
          <h2 style={{ color: "#ff1493", fontSize: "32px" }}>{product.name}</h2>
          <h3 style={{ marginTop: "10px", fontSize: "24px" }}>₹{product.price}</h3>

          <p style={{ marginTop: "15px", color: "#555", lineHeight: "1.6" }}>
            {product.desc}
          </p>

          <button
            style={{
              marginTop: "20px",
              padding: "12px 20px",
              background: "#ff1493",
              border: "none",
              borderRadius: "10px",
              color: "white",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Add to Cart
          </button>

          <br /><br />

          <Link to="/products">
            <button
              style={{
                padding: "10px 15px",
                borderRadius: "10px",
                background: "#ff79b7",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ← Back to Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
=======
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../pages/Productdetails.css"; 
import wheatImg from "../assets/wheat.jpg";
import wheat1Img from "../assets/wheat1.jpg";
import wheat2Img from "../assets/wheat2.jpg";


// SAME product list as Products.jsx (important!)
const productData = [
  { id: 1, name: "Wheat Seeds", price: 299, img: wheatImg, desc: "High-quality wheat seeds suitable for all soil types." },
  { id: 2, name: "Rice Seeds", price: 349, img: wheat1Img, desc: "Premium rice seeds with high yield capacity." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: wheat2Img, desc: "100% natural fertilizer to boost crop growth." },
  { id: 4, name: "Pesticide Spray", price: 699, img: "/rice.jpg", desc: "Effective pesticide for crop protection." },
  { id: 5, name: "Garden Tools Kit", price: 899, img: "/rice1.jpg", desc: "Complete gardening tool kit for farmers." },
  { id: 6, name: "Corn Seeds", price: 259, img: "/rice2.jpg", desc: "Healthy and strong corn seeds for farming." },
  { id: 6, name: "Corn Seeds", price: 259, img: "/corn.jpg", desc: "Healthy and strong corn seeds for farming." },
  { id: 6, name: "Corn Seeds", price: 259, img: "/corn1.jpg", desc: "Healthy and strong corn seeds for farming." },
  { id: 6, name: "Corn Seeds", price: 259, img: "/corn2.jpg", desc: "Healthy and strong corn seeds for farming." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: "/org.jpg", desc: "100% natural fertilizer to boost crop growth." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: "/org1.jpg", desc: "100% natural fertilizer to boost crop growth." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: "/org2.jpg", desc: "100% natural fertilizer to boost crop growth." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: "/org3.jpg", desc: "100% natural fertilizer to boost crop growth." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: "/org3.jpg", desc: "100% natural fertilizer to boost crop growth." },
  { id: 3, name: "Organic Fertilizer", price: 499, img: "/org3.jpg", desc: "100% natural fertilizer to boost crop growth." },
];

export default function Productdetails() {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "20px" }}>Product Not Found</h2>;
  }

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        background: "#ffe6f3",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "white",
          width: "80%",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
          display: "flex",
          gap: "25px",
        }}
      >
        {/* Image */}
        <img
          src={product.img}
          alt={product.name}
          style={{
            width: "40%",
            borderRadius: "15px",
            objectFit: "cover",
          }}
        />

        {/* Right info */}
        <div style={{ flex: 1 }}>
          <h2 style={{ color: "#ff1493", fontSize: "32px" }}>{product.name}</h2>
          <h3 style={{ marginTop: "10px", fontSize: "24px" }}>₹{product.price}</h3>

          <p style={{ marginTop: "15px", color: "#555", lineHeight: "1.6" }}>
            {product.desc}
          </p>

          <button
            style={{
              marginTop: "20px",
              padding: "12px 20px",
              background: "#ff1493",
              border: "none",
              borderRadius: "10px",
              color: "white",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Add to Cart
          </button>

          <br /><br />

          <Link to="/products">
            <button
              style={{
                padding: "10px 15px",
                borderRadius: "10px",
                background: "#ff79b7",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ← Back to Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> d595fd93add08e801da6b8fac24a12fd83cef0b8
