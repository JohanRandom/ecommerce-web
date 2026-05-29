# Ecommerce Web

Frontend de ecommerce desarrollado con React, Vite y Tailwind CSS. La aplicacion consume una API REST creada con Spring Boot, permite iniciar sesion con JWT, listar productos dinamicos y gestionar un carrito persistente.

Demo en vivo:
https://ecommerce-web-gamma-one.vercel.app/

## Caracteristicas

- Catalogo de productos cargado desde el backend.
- Carrito de compras persistente con localStorage.
- Autenticacion con JWT.
- Checkout conectado a endpoint protegido.
- Interfaz responsive con estados de carga, error y carrito vacio.
- Navegacion entre paginas con React Router.
- Estado global del carrito con Context API.

## Tecnologias

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend relacionado

- Spring Boot REST API
- JWT Authentication
- PostgreSQL
- Supabase
- Render

## API Backend

Este frontend consume la siguiente API:

https://ecommerce-api-ln7m.onrender.com

Repositorio del backend:

https://github.com/JohanRandom/ecommerce-api

## Instalacion

Clonar el repositorio:

```bash
git clone https://github.com/JohanRandom/ecommerce-web.git
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

## Flujo de autenticacion

Despues del login, el backend genera un token JWT. El frontend guarda ese token en localStorage y lo envia como Bearer Token cuando se realiza el checkout.

## Carrito de compras

El carrito permite agregar productos, acumular cantidades, eliminar elementos y conservar la informacion al recargar la pagina usando localStorage.

## Autor

Johan Moreno  
Desarrollador de Software
