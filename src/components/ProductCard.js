import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} style={styles.img} alt="" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`} style={styles.btn}>View Details</Link>
    </div>
  );
};

const styles = {
  card: { width: "250px", padding: "15px", border: "1px solid #ddd", borderRadius: "10px", textAlign: "center" },
  img: { width: "100%", height: "150px" },
  btn: { marginTop: "10px", display: "inline-block", padding: "5px 10px", background: "green", color: "white" }
};

export default ProductCard;
