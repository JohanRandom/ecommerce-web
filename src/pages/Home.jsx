import { useContext, useEffect, useState } from "react";
import api from "../api/axios";
import heroImage from "../assets/hero.png";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/cartContext";

function formatCurrency(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(Number(value || 0));
}

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Esta petición mantiene el frontend conectado al backend real del ecommerce.
    api.get("/products")
      .then(response => {
        setProducts(response.data);
        setErrorMessage("");
      })
      .catch(error => {
        console.error(error);
        setErrorMessage("No pudimos cargar los productos. Inténtalo nuevamente en unos minutos.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <section className="grid items-center gap-10 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-14">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-bold text-indigo-700 shadow-sm">
              Tienda demo conectada a API REST
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Ecommerce moderno para mostrar frontend, login y carrito real.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Catálogo dinámico desde backend, carrito persistente en el navegador y checkout protegido con JWT.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                <span className="block text-2xl font-black text-slate-950">
                  {products.length}
                </span>
                <span className="text-sm font-medium text-slate-500">
                  productos activos
                </span>
              </div>

              <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                <span className="block text-2xl font-black text-slate-950">
                  JWT
                </span>
                <span className="text-sm font-medium text-slate-500">
                  autenticación
                </span>
              </div>

              <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                <span className="block text-2xl font-black text-slate-950">
                  API
                </span>
                <span className="text-sm font-medium text-slate-500">
                  Spring Boot
                </span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl border border-white bg-slate-950 p-8 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.45),transparent_16rem)]" />
            <div className="relative grid place-items-center rounded-3xl bg-white/5 p-10">
              <img
                src={heroImage}
                alt="Ilustración abstracta de capas tecnológicas"
                className="h-56 w-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">
                Catálogo
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                Productos destacados
              </h2>
            </div>

          </div>

          {isLoading && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map(item => (
                <div
                  key={item}
                  className="h-96 animate-pulse rounded-3xl bg-white shadow-sm"
                />
              ))}
            </div>
          )}

          {!isLoading && errorMessage && (
            <div className="rounded-3xl border border-red-100 bg-red-50 p-6 text-red-700">
              {errorMessage}
            </div>
          )}

          {!isLoading && !errorMessage && products.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
              <h3 className="text-2xl font-black text-slate-950">
                Aún no hay productos publicados
              </h3>
              <p className="mt-2 text-slate-500">
                Cuando el backend devuelva productos, aparecerán automáticamente en este catálogo.
              </p>
            </div>
          )}

          {!isLoading && !errorMessage && products.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map(product => {
                const imageUrl = product.imageUrl || product.image;

                return (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-3xl border border-white bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={product.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="grid h-full place-items-center bg-[linear-gradient(135deg,#e0e7ff_0%,#f8fafc_45%,#dbeafe_100%)]">
                          <div className="rounded-3xl border border-white/80 bg-white/70 px-6 py-4 text-center shadow-sm backdrop-blur">
                            <span className="block text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">
                              Producto
                            </span>
                            <span className="mt-2 block text-lg font-black text-slate-950">
                              {product.name}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-black tracking-tight text-slate-950">
                            {product.name}
                          </h3>
                          <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                            {product.description}
                          </p>
                        </div>

                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                          Disponible
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <p className="text-3xl font-black text-slate-950">
                          {formatCurrency(product.price)}
                        </p>

                        <button
                          onClick={() => addToCart(product)}
                          className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:bg-indigo-700"
                        >
                          Agregar
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
