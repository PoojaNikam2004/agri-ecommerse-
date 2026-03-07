import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {

  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [stock,setStock] = useState("");
  const [category,setCategory] = useState("");
  const [image,setImage] = useState(null);

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const formData = new FormData();
    formData.append("name",name);
    formData.append("price",price);
    formData.append("stock",stock);
    formData.append("category",category);
    formData.append("image",image);

    await axios.post(
      "http://localhost:5000/api/products/add",
      formData
    );

    alert("Product Added");
  }

  return(
    <div style={{padding:"40px"}}>

      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>

        <input placeholder="Name"
        onChange={(e)=>setName(e.target.value)} />

        <input placeholder="Price"
        onChange={(e)=>setPrice(e.target.value)} />

        <input placeholder="Stock"
        onChange={(e)=>setStock(e.target.value)} />

        <input placeholder="Category"
        onChange={(e)=>setCategory(e.target.value)} />

        <input type="file"
        onChange={(e)=>setImage(e.target.files[0])} />

        <button type="submit">Add Product</button>

      </form>

    </div>
  )
}

export default AddProduct;