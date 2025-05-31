# 🛠️ Stack Tecnológico - Mamacocha Tarifa

## 📋 Resumen del Stack

**Tipo de Aplicación**: Website profesional con backend API  
**Arquitectura**: Aplicación web full-stack con servidor Node.js  
**Despliegue**: Railway (PaaS)  
**Base de Datos**: PostgreSQL  

---

## 🎨 Frontend

### **HTML5 + CSS3**
- **Estructura semántica** con HTML5
- **CSS moderno** con Flexbox y Grid
- **Responsive design** mobile-first
- **Animaciones CSS** suaves y profesionales

### **Tailwind CSS v3.x**
- **Framework CSS utility-first**
- **Customización completa** de colores y componentes
- **Responsive breakpoints** optimizados
- **Purge CSS** para optimización de tamaño

### **JavaScript Vanilla**
- **Sin frameworks pesados** para máximo rendimiento
- **Interactividad moderna** con ES6+
- **Smooth scrolling** y navegación fluida
- **Formularios dinámicos** con validación

### **Librerías de UI**
- **Font Awesome 6.x** - Iconografía profesional
- **AOS (Animate On Scroll)** - Animaciones al hacer scroll
- **Google Fonts** - Tipografía moderna (Inter, Playfair Display)

---

## ⚙️ Backend

### **Node.js v16+**
- **Runtime JavaScript** del lado del servidor
- **Gestión de dependencias** con npm
- **Scripts automatizados** para desarrollo y producción

### **Express.js v4.x**
- **Framework web minimalista** y rápido
- **Middleware personalizado** para manejo de requests
- **Routing avanzado** para API REST
- **Servir archivos estáticos** optimizado

### **Dependencias Principales**
```json
{
  "express": "^4.18.2",    // Framework web
  "pg": "^8.10.0",         // Cliente PostgreSQL
  "dotenv": "^16.5.0"      // Variables de entorno
}
```

---

## 🗄️ Base de Datos

### **PostgreSQL**
- **RDBMS robusto** y escalable
- **Esquema relacional** optimizado
- **Índices estratégicos** para rendimiento
- **Constraints y validaciones** a nivel de BD

### **Estructura de Datos**
```sql
reservations {
  id: SERIAL PRIMARY KEY
  nombre: VARCHAR(100)
  email: VARCHAR(100) 
  fecha: DATE
  deporte: VARCHAR(50) CHECK
  telefono: VARCHAR(20)
  nivel: VARCHAR(20) CHECK
  mensaje: TEXT
  estado: VARCHAR(20) DEFAULT 'pendiente'
  created_at: TIMESTAMP
  updated_at: TIMESTAMP
}
```

---

## 🚀 DevOps & Despliegue

### **Railway**
- **Platform as a Service (PaaS)**
- **Despliegue automático** desde GitHub
- **Escalado automático** según demanda
- **SSL/HTTPS** incluido
- **Monitoreo integrado** con health checks

### **Configuración de Despliegue**
- **`railway.toml`** - Configuración específica de Railway
- **`Procfile`** - Comando de inicio
- **Variables de entorno** gestionadas por Railway
- **Build automático** con Nixpacks

### **CI/CD Pipeline**
```
GitHub Push → Railway Detection → Build → Deploy → Live
```

---

## 🎨 Diseño & UX

### **Paleta de Colores Veraniega**
```css
--amber-500: #f59e0b    /* Color principal cálido */
--orange-500: #f97316   /* Energía y vitalidad */
--yellow-500: #eab308   /* Brillo mediterráneo */
--teal-700: #0f766e     /* Agua cristalina */
--blue-900: #1e3a8a     /* Profundidad del mar */
```

### **Tipografía**
- **Inter** - Sans-serif moderna para textos
- **Playfair Display** - Serif elegante para títulos
- **Font Awesome** - Iconografía vectorial

### **Componentes UI**
- **Cards con hover effects** y sombras suaves
- **Gradientes armoniosos** entre colores cálidos
- **Botones con estados** y transiciones
- **Layout responsive** con breakpoints optimizados

---

## 📱 Características Técnicas

### **Performance**
- **Tiempo de carga < 2s** en conexiones 3G
- **Imágenes optimizadas** desde Unsplash CDN
- **CSS minificado** con Tailwind purge
- **Lazy loading** para recursos no críticos

### **SEO & Accesibilidad**
- **HTML semántico** con estructura clara
- **Meta tags optimizados** para redes sociales
- **Alt text** en todas las imágenes
- **Contraste de colores** WCAG AA compliant

### **Seguridad**
- **Variables de entorno** para credenciales
- **Validación de datos** en frontend y backend
- **SQL injection protection** con queries parametrizadas
- **HTTPS enforced** en producción

---

## 🔧 APIs & Endpoints

### **REST API**
```
GET  /health              # Health check
POST /api/reservations    # Crear reserva
GET  /api/reservations    # Listar reservas (admin)
GET  /*                   # SPA fallback
```

### **Estructura de Response**
```json
{
  "success": true,
  "message": "Reserva creada exitosamente",
  "data": {
    "id": 1,
    "nombre": "Juan Pérez",
    "deporte": "kitesurf",
    "fecha": "2024-06-15"
  }
}
```

---

## 📊 Monitoring & Analytics

### **Health Monitoring**
- **Health check endpoint** (`/health`)
- **Railway metrics** integradas
- **Error logging** con timestamps
- **Database connection monitoring**

### **Performance Metrics**
- **Response time tracking**
- **Database query optimization**
- **Memory usage monitoring**
- **Uptime tracking** 99.9%

---

## 🔄 Flujo de Desarrollo

### **Local Development**
```bash
npm install          # Instalar dependencias
npm run dev         # Desarrollo con nodemon
npm start           # Producción local
```

### **Git Workflow**
```
feature/nueva-funcionalidad → main → Railway Deploy
```

### **Environment Management**
- **`.env.example`** - Template de variables
- **Railway variables** - Producción
- **Local `.env`** - Desarrollo

---

## 🎯 Optimizaciones Futuras

### **Performance**
- [ ] **Service Worker** para cache offline
- [ ] **Image optimization** con WebP
- [ ] **Code splitting** para JavaScript
- [ ] **CDN integration** para assets estáticos

### **Funcionalidades**
- [ ] **Sistema de autenticación** para admin
- [ ] **Dashboard de reservas** en tiempo real
- [ ] **Notificaciones email** automáticas
- [ ] **Integración con calendario** Google/Outlook

### **Analytics**
- [ ] **Google Analytics 4** integration
- [ ] **Conversion tracking** para reservas
- [ ] **Heatmaps** con Hotjar
- [ ] **A/B testing** para optimización

---

## 📈 Métricas de Éxito

- **Tiempo de carga**: < 2 segundos
- **Uptime**: > 99.9%
- **Conversión**: Reservas por visita
- **Mobile-friendly**: 100% responsive
- **SEO Score**: > 90/100

---

🌊 **Stack moderno, escalable y optimizado para el éxito de Mamacocha Tarifa** 🏄‍♂️
