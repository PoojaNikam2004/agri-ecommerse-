// === src/pages/Products.jsx ===
import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
import wheatImg from "../assets/wheat.jpg";
import wheat1Img from "../assets/wheat1.jpg";
import wheat2Img from "../assets/wheat2.jpg";

import riceImg from "../assets/rice.jpg";
import rice1Img from "../assets/rice1.jpg";
import rice2Img from "../assets/rice2.jpg";

import cornImg from "../assets/corn.jpg";
import corn1Img from "../assets/corn1.jpg";
import corn2Img from "../assets/corn2.jpg";

import orgImg from "../assets/org.jpg";
import org1Img from "../assets/org1.jpg";
import org2Img from "../assets/org2.jpg";
import org3Img from "../assets/org3.jpg";

const productData =
 [
{ id: 1, name: 'Wheat Seeds', price: 299, img: wheatImg },
{ id: 2, name: 'Wheat Seeds', price: 399, img: wheat1Img },
{ id: 3, name: 'Wheat Seeds', price: 499, img: wheat2Img },

{ id: 4, name: 'Rice Seeds', price: 349, img: riceImg },
{ id: 5, name: 'Rice Seeds', price: 349, img: rice1Img },
{ id: 6, name: 'Rice Seeds', price: 349, img: rice2Img },

{ id: 7, name: 'Corn Seeds', price: 499, img: cornImg },
{ id: 8, name: 'Corn Seeds', price: 500, img: corn1Img },
{ id: 9, name: 'Corn Seeds', price: 799, img: corn2Img },
{ id: 10, name: 'Organic Fertilizer', price: 499, img: orgImg },
{ id: 11, name: 'Organic Fertilizer', price: 499, img: org1Img },
{ id: 12, name: 'Organic Fertilizer', price: 499, img: org2Img },
{ id: 13, name: 'Organic Fertilizer', price: 499, img: org3Img },
];


export default function Products() {

return (
 
 <div className="products-container">
<h1>Our Products</h1>
<hr></hr>
<div className="products-grid">
{productData.map((p) => (
  <div key={p.id} className="product-card">
<img src={p.img} alt={p.name} />
<h3>{p.name}</h3>
<p>₹{p.price}</p>
<Link to={`/product/${p.id}`} className="details-btn">View Details</Link>
</div>
))}
</div>
</div>
);
}