# 🛒 Ecommerce Web

Frontend de ecommerce desarrollado con React, Vite y Tailwind CSS.  
La aplicación consume una API REST creada con Spring Boot, permite autenticación con JWT, gestión de carrito persistente y realización de compras reales conectadas a PostgreSQL.

🌍 Demo en vivo:  
https://ecommerce-web-gamma-one.vercel.app/

---

# 🚀 Características

- Catálogo dinámico de productos cargado desde API REST.
- Autenticación segura con JWT.
- Carrito persistente utilizando localStorage.
- Checkout conectado a endpoint protegido.
- Órdenes reales almacenadas en PostgreSQL.
- Navegación SPA con React Router.
- Estado global utilizando Context API.
- Interfaz responsive moderna con Tailwind CSS.
- Backend desplegado en Render.
- Frontend desplegado en Vercel.

---

# 🧩 Tecnologías utilizadas

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Context API

## Backend relacionado

- Spring Boot
- JWT Authentication
- BCrypt
- PostgreSQL
- Supabase
- Render

## Deploy

- Vercel
- Render

---

# 🔗 Enlaces del proyecto

## ⚙️ API Backend

https://ecommerce-api-ln7m.onrender.com

## 💻 Repositorio Backend

https://github.com/JohanRandom/ecommerce-api

---

# 🧪 Credenciales de prueba

## Usuario administrador

Email:
admin@techstore.com

Password:
Admin123\*

---

## Usuario demo

Email:
user@techstore.com

Password:
User123\*

---

## Cuenta tester

Email:
demo@techstore.com

Password:
Demo123\*

---

# ⚙️ Instalación local

Clonar el repositorio:

```bash
git clone https://github.com/JohanRandom/ecommerce-web.git
```

Entrar al proyecto:

```bash
cd ecommerce-web
```

Instalar dependencias:

```bash
npm install
```

Ejecutar servidor de desarrollo:

```bash
npm run dev
```

---

# 🔐 Flujo de autenticación

Después del login:

1. el backend valida las credenciales
2. se genera un token JWT
3. el frontend guarda el token en localStorage
4. las peticiones protegidas incluyen Bearer Token

---

# 🛒 Carrito de compras

El carrito permite:

- agregar productos
- acumular cantidades automáticamente
- eliminar elementos
- persistir información utilizando localStorage
- calcular el total dinámicamente
- realizar compras reales conectadas al backend

---

# 🧾 Sistema de órdenes

Al finalizar una compra:

1. el frontend envía los productos al backend
2. el backend valida el JWT
3. se crea una orden asociada al usuario autenticado
4. la información se almacena en PostgreSQL

---

# ☁️ Despliegue

## Frontend

Desplegado en Vercel:

https://ecommerce-web-gamma-one.vercel.app/

## Backend

Desplegado en Render:

https://ecommerce-api-ln7m.onrender.com

---

# 👨‍💻 Autor

Johan Moreno

Desarrollador de Software
