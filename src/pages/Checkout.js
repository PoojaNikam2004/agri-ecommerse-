import { useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0,
  );

  const placeOrder = async () => {
    console.log("🟢 Place Order Button Clicked");

    try {
      const token = localStorage.getItem("token");

      console.log("TOKEN =>", token);
      console.log("CART ITEMS =>", cartItems);
      console.log("ADDRESS =>", address);
      console.log("TOTAL =>", total);

      if (!token) {
        alert("Please Login First");
        return;
      }

      if (!address.trim()) {
        alert("Please Enter Address");
        return;
      }

      const payload = {
        cartItems,
        totalAmount: total,
        address,
        paymentMethod: "COD",
      };

      console.log("REQUEST DATA =>", payload);

      const res = await axios.post(
        "http://localhost:5000/api/orders/place",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("SUCCESS RESPONSE =>", res.data);

      if (res.data.success) {
        clearCart();
        alert("Order Placed Successfully");

        navigate("/order-success");
      }
    }catch (err) {
  console.log("FULL ERROR =>", err);

  if (err.response) {
    console.log("STATUS =>", err.response.status);
    console.log("DATA =>", err.response.data);

    alert(
      `Error ${err.response.status}\n${JSON.stringify(err.response.data)}`
    );
  } else {
    console.log("NO RESPONSE =>", err.message);
    alert(err.message);
  }
}
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <div className="checkout-icon">🚚</div>
        <h1>Checkout</h1>

        <textarea
          placeholder="Enter Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <h2>Total: ₹{total}</h2>

        <button className="place-order-btn" onClick={placeOrder}>
          Place Order
        </button>
        <button
          className="back-to-cart-btn"
          onClick={() => navigate("/products")}
        >
          Continue to Shopping
        </button>
      </div>
    </div>
  );
};

export default Checkout;
