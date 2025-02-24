const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const corsOption = {
  origin:"http://localhost:5173"
}
app.use(cors(corsOption));



const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'postgres', 
  password: '1234', 
  port: 5432,
});

app.get('/api/tovar', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tovar');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

app.get('/api/header', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM header');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});


app.get('/api/images', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM images');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});