import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/axios";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  async function handleLogin(e) {

    e.preventDefault();

    setMessage("");

    try {

      const response = await api.post("/auth/login", {

        email,
        password

      });

      const token = response.data.token;

      localStorage.setItem("token", token);

      setMessage("Login exitoso");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);

      console.log("TOKEN:", token);

    } catch (error) {

      console.error(error);

      setMessage("Credenciales incorrectas");
    }
  }

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex justify-center items-center p-8">

        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
        >

          <h1 className="text-4xl font-bold mb-6">
            Login
          </h1>

          <input
            type="email"
            placeholder="Correo"
            className="w-full border p-3 rounded-xl mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border p-3 rounded-xl mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800"
          >

            Iniciar sesión

          </button>

          {message && (

            <p className="mt-4 text-center">

              {message}

            </p>

          )}

        </form>

      </div>

    </div>
  );
}

export default Login;