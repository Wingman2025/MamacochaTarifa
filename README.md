# MamacochaTarifa

Este proyecto es una aplicación Node.js con un frontend web. Utiliza variables de entorno y está preparado para despliegue en plataformas como GitHub.

## Características
- Servidor Node.js (`server.js`)
- Frontend en `index.html`
- Gestión de dependencias con `package.json`
- Variables de entorno gestionadas con dotenv (`.env.example`)

## Instalación
1. Clona el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` basado en `.env.example` y completa los valores necesarios.
4. Ejecuta el servidor:
   ```bash
   node server.js
   ```

## Estructura del Proyecto
- `server.js`: Servidor principal
- `index.html`: Interfaz web
- `assets/`: Recursos estáticos
- `.env.example`: Ejemplo de variables de entorno
- `.gitignore`: Archivos y carpetas ignorados por git
- `package.json`: Dependencias y scripts de npm

## Notas
- Recuerda no subir archivos sensibles ni tu archivo `.env` real a GitHub.
- Si usas dependencias de Python en el futuro, agrégalas en `requirements.txt`.
