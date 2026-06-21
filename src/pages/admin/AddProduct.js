import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";


const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("e.target.files[0]");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("category", category);
      formData.append("image", image);
   

      await axios.post(
        "http://localhost:5000/api/products",
        formData
      );

      alert("Product Added Successfully");

      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setCategory("");
      setImage(null);
    } catch (err) {
      console.log(err);
      alert("Failed to add product");
    }
  };

  return (
  <div className="add-product-container">
    <div className="add-product-card">

      <div className="product-icon">
        🌱
      </div>

      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="product-input"
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="product-textarea"
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="product-input"
          type="number"
          placeholder="Price (₹)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="product-input"
          type="number"
          placeholder="Stock Quantity"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <input
          className="product-input"
          type="text"
          placeholder="Category ID"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="product-file"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          className="add-product-btn"
          type="submit"
        >
          Add Product
        </button>

      </form>
    </div>
  </div>
);
}
export default AddProduct;