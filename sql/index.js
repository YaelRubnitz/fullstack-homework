import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'classicmodels',
});

// 📌 שאלה 1: לקוחות מצרפת
app.get('/question1', async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT COUNT(*) AS france_customers FROM customers WHERE country = 'France'");
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 📌 שאלה 2: עובדים שמדווחים לעובד 1143
app.get('/question2', async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT firstName, lastName FROM employees WHERE reportsTo = 1143");
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 📌 שאלה 3: מלאי מוצרים בקטגוריית Classic Cars
app.get('/question3', async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT SUM(quantityInStock) AS total_classic_cars FROM products WHERE productLine = 'Classic Cars'");
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});