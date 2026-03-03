import React from "react";
import { useCart } from "../context/CartContext";


const Order = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="order-container">
      <h1>🧾 Your Order Summary</h1>

      {cartItems.length === 0 ? (
        <h2>No items in order</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="order-item" key={item.id}>
              <img
                src={`http://localhost:5000/uploads/${item.image}`}
                alt={item.name}
              />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
          ))}

          <div className="order-total">
            <h2>Total: ₹{totalPrice}</h2>
            <button className="place-order-btn">
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Order;
