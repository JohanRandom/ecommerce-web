import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      {/* El enrutador de React gestiona la navegacion entre las diferentes paginas del sitio sin recargar el navegador. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
