import { useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const placeOrder = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/orders/place",
        {
          cartItems: cart,
          totalAmount: total,
          address,
          paymentMethod: "COD",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.data.success) {
        clearCart();
        navigate("/order-success");
      }

    } catch (err) {
      console.log(err);
      alert("Order failed");
    }
  };

  return (
    <div>

      <h2>Checkout</h2>

      <textarea
        placeholder="Enter Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <h3>Total: ₹{total}</h3>

      <button onClick={placeOrder}>
        Place Order
      </button>

    </div>
  );
};

export default Checkout;