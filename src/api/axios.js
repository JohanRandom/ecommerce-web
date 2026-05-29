import axios from "axios";

// Instancia central de Axios: si cambia la URL del backend, solo se modifica aquí.
export default axios.create({
  baseURL: "https://ecommerce-api-ln7m.onrender.com/api",
});
