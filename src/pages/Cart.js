
import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Organic Wheat Seeds",
      price: 120,
      quantity: 1,
      image: "https://i.imgur.com/HKpF6xg.png",
    },
    {
      id: 2,
      name: "Premium Rice Seeds",
      price: 150,
      quantity: 2,
      image: "https://i.imgur.com/7zgYQYw.png",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        padding: "20px",
        background: "#ffe6f3",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ff2d8d",
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        🛒 Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2 style={{ textAlign: "center", color: "#555" }}>
          Cart is empty 😔
        </h2>
      ) : (
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                background: "white",
                marginBottom: "15px",
                padding: "15px",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "90px", height: "90px", marginRight: "15px" }}
              />

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "20px",
                    color: "#ff1493",
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </h3>
                <p style={{ margin: "5px 0", color: "#333" }}>
                  ₹{item.price} / packet
                </p>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    style={qtyBtn}
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <span style={{ margin: "0 10px", fontSize: "18px" }}>
                    {item.quantity}
                  </span>
                  <button
                    style={qtyBtn}
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                style={{
                  background: "#ff4d94",
                  border: "none",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "24px", color: "#ff1493" }}>
              Total: ₹{totalPrice}
            </h2>

            <button
              style={{
                marginTop: "15px",
                padding: "12px 20px",
                width: "100%",
                background: "#ff0080",
                color: "white",
                fontSize: "18px",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Proceed to Checkout →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const qtyBtn = {
  background: "#ffb6da",
  border: "none",
  padding: "6px 10px",
  fontSize: "16px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Cart;
