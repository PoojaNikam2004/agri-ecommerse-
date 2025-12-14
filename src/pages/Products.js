<<<<<<< HEAD
// === src/pages/Products.jsx ===
import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
import wheatImg from "../assets/wheat.jpg";
import wheat1Img from "../assets/wheat1.jpg";
import wheat2Img from "../assets/wheat2.jpg";





const productData =
 [
{ id: 1, name: 'Wheat Seeds', price: 299, img: wheatImg },
{ id: 2, name: 'Wheat Seeds', price: 399, img: wheat1Img },
{ id: 3, name: 'Wheat Seeds', price: 499, img: wheat2Img },

{ id: 4, name: 'Rice Seeds', price: 349, img: "/rice.jpg" },
{ id: 5, name: 'Rice Seeds', price: 349, img: "/rice1.jpg" },
{ id: 6, name: 'Rice Seeds', price: 349, img: "/rice2.jpg" },

{ id: 7, name: 'Corn Seeds', price: 499, img: "/corn.jpg" },
{ id: 8, name: 'Corn Seeds', price: 500, img: "/corn1.jpg" },
{ id: 9, name: 'Corn Seeds', price: 799, img: "/corn2.jpg" },
{ id: 10, name: 'Organic Fertilizer', price: 499, img: "/org.jpg" },
{ id: 10, name: 'Organic Fertilizer', price: 499, img: "/org1.jpg" },
{ id: 10, name: 'Organic Fertilizer', price: 499, img: "/org2.jpg" },
{ id: 10, name: 'Organic Fertilizer', price: 499, img: "/org3.jpg" },
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
=======
// === src/pages/Products.jsx ===
import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
import wheatImg from "../assets/wheat.jpg";
import wheat1Img from "../assets/wheat1.jpg";
import wheat2Img from "../assets/wheat2.jpg";





const productData =
 [
{ id: 1, name: 'Wheat Seeds', price: 299, img: wheatImg },
{ id: 2, name: 'Wheat Seeds', price: 399, img: wheat1Img },
{ id: 3, name: 'Wheat Seeds', price: 499, img: wheat2Img },

{ id: 4, name: 'Rice Seeds', price: 349, img: "/rice.jpg" },
{ id: 5, name: 'Rice Seeds', price: 349, img: "/rice1.jpg" },
{ id: 6, name: 'Rice Seeds', price: 349, img: "/rice2.jpg" },

{ id: 7, name: 'Corn Seeds', price: 499, img: "/corn.jpg" },
{ id: 8, name: 'Corn Seeds', price: 500, img: "/corn1.jpg" },
{ id: 9, name: 'Corn Seeds', price: 799, img: "/corn2.jpg" },
{ id: 10, name: 'Organic Fertilizer', price: 499, img: "/org.jpg" },
{ id: 10, name: 'Organic Fertilizer', price: 499, img: "/org1.jpg" },
{ id: 10, name: 'Organic Fertilizer', price: 499, img: "/org2.jpg" },
{ id: 10, name: 'Organic Fertilizer', price: 499, img: "/org3.jpg" },
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
>>>>>>> d595fd93add08e801da6b8fac24a12fd83cef0b8
}