const mysql = require("mysql2");
// Database setup
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: "BKTUTOR",
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "+07:00",
});
if (db) {
  console.log("Connected to database successfully");
} else {
  console.log("Failed to connect to database");
}
module.exports = db;
