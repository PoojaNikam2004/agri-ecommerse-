import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      <div className="admin-grid">

        <Link to="/admin/add-product" className="admin-card">
          Add Product
        </Link>

        <Link to="/admin/products" className="admin-card">
          Manage Products
        </Link>

        <Link to="/admin/orders" className="admin-card">
          Manage Orders
        </Link>

      </div>
    </div>
  );
};

export default AdminDashboard;