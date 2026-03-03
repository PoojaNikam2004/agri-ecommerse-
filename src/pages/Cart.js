import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";




const Cart = () => {
  const {
    cartItems = [],   // 👈 DEFAULT VALUE (safety)
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  console.log("cartItems:", cartItems);
const navigate= useNavigate();

  return (
    <div className="cart-container">
  <h1 className="cart-title">🛒 Your Cart</h1>

  {cartItems.length === 0 ? (
    <h2 className="cart-empty">Cart is empty 😔</h2>
  ) : (
    cartItems.map(item => (
      <div className="cart-item" key={item.id}>
        <div className="cart-info">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>

        <div className="cart-qty">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.quantity}</span>
          <p>₹{Number(item.price)}</p>

          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>

        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    ))
  )}

  {cartItems.length > 0 && (
    <div className="cart-total">
      <h2>Total: ₹{totalPrice}</h2>
      

<button
  className="checkout-btn"
  onClick={() => navigate("/order")}
>
  Proceed to Checkout →
</button>
     
    </div>
  )}
</div>
  );
}
export default Cart;


