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

      // El token se guarda para usarlo despues en rutas protegidas como checkout.
      localStorage.setItem("token", token);

      setMessage("Login exitoso. Redirigiendo al catálogo...");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);

      console.log("TOKEN:", token);
    } catch (error) {
      console.error(error);
      setMessage("Credenciales incorrectas. Revisa el correo y la contraseña.");
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <section className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">
            Acceso privado
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Inicia sesión para completar tus compras.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Este formulario prueba la autenticación JWT con el backend. Cuando el login es correcto, el token queda disponible para el checkout.
          </p>
        </section>

        <section className="rounded-4xl border border-white bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8">
          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                Login
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Usa las credenciales registradas en tu backend.
              </p>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">
                Correo electrónico
              </span>
              <input
                type="email"
                placeholder="correo@ejemplo.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">
                Contraseña
              </span>
              <input
                type="password"
                placeholder="Tu contraseña"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:bg-indigo-700"
            >
              Iniciar sesión
            </button>

            {message && (
              <p className="rounded-2xl bg-slate-50 p-4 text-center text-sm font-semibold text-slate-700">
                {message}
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
