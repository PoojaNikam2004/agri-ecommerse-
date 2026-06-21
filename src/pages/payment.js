import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const { data: order } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        {
          amount: 500,
        }
      );

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID",

        amount: order.amount,
        currency: order.currency,

        name: "AgriMart",
        description: "AgriMart Order Payment",

        order_id: order.id,

        handler: async function (response) {
          const verify = await axios.post(
            "http://localhost:5000/api/payment/verify",
            response
          );

          if (verify.data.success) {
            alert("✅ Payment Successful");

            navigate("/order-success");
          } else {
            alert("❌ Payment Failed");
          }
        },

        prefill: {
          name: "Customer",
          email: "customer@gmail.com",
        },

        theme: {
          color: "#2e7d32",
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.open();

    } catch (err) {
      console.log(err);
      alert("Payment Failed");
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-card">

        <h1>Online Payment</h1>

        <p>Secure payment powered by Razorpay</p>

        <button onClick={handlePayment}>
          Pay Now
        </button>

      </div>
    </div>
  );
};

export default Payment;