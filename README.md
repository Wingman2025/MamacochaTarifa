# 🏄‍♂️ Mamacocha Tarifa - Escuela de Deportes Acuáticos

Website profesional para instructor personal de kitesurf, surf y wingfoil en Tarifa.

## ✨ Características

- **Diseño moderno** con paleta cálida veraniega (amber, orange, yellow)
- **Responsive** optimizado para móviles y desktop
- **Secciones principales**: Hero, Sobre Mí, Clases, Testimonios, Contacto
- **Servicios**: Kitesurf (€75), Surf (€65), Wingfoil (€85)
- **Backend Express** con API para reservas
- **Base de datos PostgreSQL** para gestión de reservas

## 🚀 Despliegue en Railway

### 1. Preparación del Proyecto
```bash
# Clonar el repositorio
git clone <tu-repo>
cd MamacochaTarifa

# Instalar dependencias
npm install
```

### 2. Configurar Railway
1. Ve a [railway.app](https://railway.app) y crea una cuenta
2. Conecta tu repositorio de GitHub
3. Crea un nuevo proyecto desde GitHub

### 3. Configurar Base de Datos
1. En Railway, añade un servicio **PostgreSQL**
2. Copia la `DATABASE_URL` generada
3. Configura las variables de entorno:

```
DATABASE_URL=postgresql://...
NODE_ENV=production
PORT=3000
```

### 4. Crear Tabla de Reservas
Ejecuta este SQL en tu base de datos PostgreSQL:

```sql
CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  fecha DATE NOT NULL,
  deporte VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Desplegar
1. Haz push a tu repositorio
2. Railway detectará automáticamente el proyecto Node.js
3. El despliegue se iniciará automáticamente

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# Ejecutar en desarrollo
npm run dev

# Ejecutar en producción
npm start
```

## 📁 Estructura del Proyecto

```
MamacochaTarifa/
├── index.html          # Página principal
├── server.js           # Servidor Express
├── package.json        # Dependencias Node.js
├── railway.toml        # Configuración Railway
├── Procfile           # Comando de inicio
├── .env.example       # Variables de entorno ejemplo
├── .gitignore         # Archivos ignorados
└── README.md          # Este archivo
```

## 🎨 Paleta de Colores

- **Amber** (#f59e0b): Color principal cálido
- **Orange** (#f97316): Energía y vitalidad
- **Yellow** (#eab308): Brillo del sol mediterráneo
- **Gradientes**: Transiciones suaves entre tonos cálidos

## 📱 Secciones

1. **Hero**: Imagen de kitesurf con overlay armonioso
2. **Sobre Mí**: Presentación del instructor con credenciales
3. **Clases**: Tres servicios principales con precios
4. **Testimonios**: Reseñas de alumnos satisfechos
5. **Contacto**: Información directa sin formularios

## 🔧 API Endpoints

- `POST /api/reservations` - Crear nueva reserva
- `GET /` - Servir página principal

## 📞 Contacto

- **Teléfono**: +34 600 123 456
- **Email**: info@mamacochatarifakitesurf.com
- **Ubicación**: Playa de Los Lances, Tarifa, Cádiz

---

🌊 **¡Listo para surfear las olas de Tarifa!** 🏄‍♂️
