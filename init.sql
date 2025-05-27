-- Tabla para gestionar las reservas de clases
CREATE TABLE IF NOT EXISTS reservations (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  fecha DATE NOT NULL,
  deporte VARCHAR(50) NOT NULL CHECK (deporte IN ('kitesurf', 'surf', 'wingfoil')),
  telefono VARCHAR(20),
  nivel VARCHAR(20) CHECK (nivel IN ('principiante', 'intermedio', 'avanzado')),
  mensaje TEXT,
  estado VARCHAR(20) DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'confirmada', 'cancelada')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_reservations_fecha ON reservations(fecha);
CREATE INDEX IF NOT EXISTS idx_reservations_deporte ON reservations(deporte);
CREATE INDEX IF NOT EXISTS idx_reservations_estado ON reservations(estado);

-- Función para actualizar el timestamp de updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para actualizar automáticamente updated_at
CREATE TRIGGER update_reservations_updated_at 
    BEFORE UPDATE ON reservations 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Datos de ejemplo (opcional)
-- INSERT INTO reservations (nombre, email, fecha, deporte, nivel) VALUES
-- ('Juan Pérez', 'juan@example.com', '2024-06-15', 'kitesurf', 'principiante'),
-- ('María García', 'maria@example.com', '2024-06-16', 'surf', 'intermedio');
