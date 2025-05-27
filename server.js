const express = require('express');
const { Pool } = require('pg');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración de la base de datos
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Health check endpoint para Railway
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API: crear reserva
app.post('/api/reservations', async (req, res) => {
  const { nombre, email, fecha, deporte } = req.body;
  
  // Validación básica
  if (!nombre || !email || !fecha || !deporte) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }
  
  try {
    const result = await pool.query(
      'INSERT INTO reservations (nombre, email, fecha, deporte) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre, email, fecha, deporte]
    );
    res.status(201).json({ 
      success: true, 
      message: 'Reserva creada exitosamente',
      data: result.rows[0] 
    });
  } catch (err) {
    console.error('Error al crear reserva:', err);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      message: 'No se pudo procesar la reserva' 
    });
  }
});

// Fallback para SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error('Error no manejado:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`🌊 Mamacocha Tarifa server ejecutándose en puerto ${port}`);
  console.log(`🏄‍♂️ Entorno: ${process.env.NODE_ENV || 'development'}`);
});
