const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "pooja",
  password: "pooja123",
  database: "pooja",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, conn) => {
  if (err) {
    console.log("❌ DB Error:", err.message);
  } else {
    console.log("✅ MySQL Connected Successfully");
    conn.release();
  }
});

module.exports = pool;