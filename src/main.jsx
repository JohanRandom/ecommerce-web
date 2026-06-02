import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./index.css";

import CartProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* El proveedor del carrito envuelve la aplicacion para que el estado global sea accesible desde cualquier componente. */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
