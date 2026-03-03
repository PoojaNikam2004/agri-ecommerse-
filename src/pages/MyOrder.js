import { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/orders/my-orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>My Orders</h2>

      {orders.map((o) => (
        <div key={o.id} className="order-card">
          <p>Order ID: {o.id}</p>
          <p>Total: ₹{o.total_amount}</p>
          <p>Status: {o.order_status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
