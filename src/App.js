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
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Order" element={<Order />} />
      
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/my-order" element={<MyOrder />} />

        
      </Routes>
      <Footer />
    </CartProvider>

  );
}

export default App;
