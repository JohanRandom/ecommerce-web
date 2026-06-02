# Ecommerce Web

![Vista previa del proyecto](./public/assets/preview.png)

Frontend de ecommerce desarrollado con React, Vite y Tailwind CSS.  
La aplicación consume una API REST creada con Spring Boot, permite autenticación con JWT, gestión de carrito persistente y realización de compras reales conectadas a PostgreSQL.

---

# Características

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

# Tecnologías utilizadas

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

## Despliegue

- Vercel
- Render

---

# Enlaces del proyecto

## API Backend

https://ecommerce-api-ln7m.onrender.com

## Repositorio Backend

https://github.com/JohanRandom/ecommerce-api

---

# Credenciales de prueba

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

## Cuenta de prueba

Email:
demo@techstore.com

Password:
Demo123\*

---

# Instalación local

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

# Flujo de autenticación

Después del inicio de sesión:

1. El backend valida las credenciales.
2. Se genera un token JWT.
3. El frontend almacena el token en localStorage.
4. Las peticiones protegidas incluyen el Bearer Token.

---

# Carrito de compras

El carrito permite:

- Agregar productos.
- Acumular cantidades automáticamente.
- Eliminar elementos.
- Persistir información utilizando localStorage.
- Calcular el total dinámicamente.
- Realizar compras reales conectadas al backend.

---

# Sistema de órdenes

Al finalizar una compra:

1. El frontend envía los productos al backend.
2. El backend valida el JWT.
3. Se crea una orden asociada al usuario autenticado.
4. La información se almacena en PostgreSQL.

---

# Despliegue

## Frontend

Desplegado en Vercel:

https://ecommerce-web-gamma-one.vercel.app/

## Backend

Desplegado en Render:

https://ecommerce-api-ln7m.onrender.com

---

# Autor

Johan Moreno

Desarrollador de Software
