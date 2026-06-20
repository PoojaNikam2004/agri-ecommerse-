import React from "react";
import { useCart } from "../context/CartContext";
import "./Order.css";

const Order = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="order-container">

      <h1>🧾 Order Summary</h1>

      {cartItems.length === 0 ? (
        <h2>No Products Found</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              className="order-item"
              key={item.id}
            >
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>
          ))}

          <div className="order-total">
            <h2>Total: ₹{totalPrice}</h2>
          </div>
        </>
      )}

    </div>
  );
};

export default Order;