const express = require('express');
const { Pool } = require('pg');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// API: crear reserva
app.post('/api/reservations', async (req, res) => {
  const { nombre, email, fecha, deporte } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO reservations (nombre, email, fecha, deporte) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre, email, fecha, deporte]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al guardar reserva' });
  }
});

// Fallback para SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Server ejecutándose en http://localhost:${port}`));
