import { useEffect, useState } from "react";
import axios from "axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:5000/api/admin/orders",
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:5000/api/admin/orders/${id}`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchOrders();
  };

  return (
    <div>
      <h2>Admin Orders</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.name}</td>
              <td>₹{o.total_amount}</td>
              <td>{o.order_status}</td>

              <td>
                <select
                  value={o.order_status}
                  onChange={(e) =>
                    updateStatus(o.id, e.target.value)
                  }
                >
                  <option value="pending">Pending</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;