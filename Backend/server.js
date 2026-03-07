const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
require("./config/db");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/product"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/orders", require("./routes/order"));
app.use("/api/categories", require("./routes/category"));
app.use("/uploads", express.static("uploads"));

app.use("/payment", express.static("paymentRoutes"));
app.use("/api/admin", require("./routes/adminorders"));







// Test Route
app.get("/", (req, res) => {
  res.send("Backend + MySQL Connected 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
