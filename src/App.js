import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Productdetails from "./pages/Productdetails";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";
import About from "./pages/About";
import Order from "./pages/Order";
import OrderSuccess from "./pages/OrderSuccess";

import MyOrder from "./pages/MyOrder";


import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import ManageProducts from "./pages/admin/ManageProducts";
import "./App.css";
import AdminOrders from "./pages/admin/AdminOrders";
import Profile from "./pages/Profile";




function App() {
  return (
    <CartProvider>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
        <Route path="/Order" element={<Order />} />
      
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/my-order" element={<MyOrder />} />
   
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/products" element={<ManageProducts />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/profile" element={<Profile />} />



        
      </Routes>
      <Footer />
    </CartProvider>

  );
}

export default App;
