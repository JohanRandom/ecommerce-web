import { Link } from "react-router-dom";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/cartContext";
import api from "../api/axios";

function formatCurrency(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(Number(value || 0));
}

function Cart() {
  const {
    cartItems,
    removeFromCart,
    total,
    clearCart
  } = useContext(CartContext);

  async function checkout() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Debes iniciar sesión");
        return;
      }

      // El backend espera solo el id del producto y la cantidad comprada.
      const orderData = {
        products: cartItems.map(item => ({
          productId: item.id,
          quantity: item.quantity
        }))
      };

      const response = await api.post(
        "/orders",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log(response.data);
      alert("Compra realizada");
      clearCart();
    } catch (error) {
      console.error(error);
      alert("Error al procesar compra");
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">
            Checkout
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">
            Carrito de compras
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">
              Tu carrito está vacío
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-500">
              Agrega productos desde el catálogo para probar el flujo completo de carrito y checkout.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
            >
              Ver productos
            </Link>
          </section>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
            <section className="space-y-4">
              {cartItems.map(item => (
                <article
                  key={item.id}
                  className="flex flex-col gap-5 rounded-3xl border border-white bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">
                      Producto
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      {item.name}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Cantidad: {item.quantity}
                    </p>
                    <p className="mt-3 text-xl font-black text-slate-950">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-full border border-red-200 px-5 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
                  >
                    Eliminar
                  </button>
                </article>
              ))}
            </section>

            <aside className="h-fit rounded-3xl border border-white bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                Resumen
              </p>
              <div className="mt-5 space-y-3 border-b border-slate-100 pb-5 text-sm text-slate-500">
                <div className="flex justify-between">
                  <span>Productos</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span>Por definir</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="font-bold text-slate-500">
                  Total
                </span>
                <span className="text-3xl font-black text-slate-950">
                  {formatCurrency(total)}
                </span>
              </div>

              <button
                onClick={checkout}
                className="mt-6 w-full rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:bg-indigo-700"
              >
                Finalizar compra
              </button>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

export default Cart;
