import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./index.css";

import CartProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* CartProvider envuelve toda la app para que cualquier pagina pueda usar el carrito. */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
