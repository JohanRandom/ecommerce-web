import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const linkClasses = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-slate-950 text-white"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
    }`;

  return (
    <header className="sticky top-0 z-20 border-b border-white/70 bg-white/85 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white">
            EM
          </span>

          <span>
            <span className="block text-xl font-black tracking-tight text-slate-950">
              Ecommerce Market
            </span>
            <span className="block text-xs font-medium text-slate-500">
              React + Spring Boot
            </span>
          </span>
        </Link>

        {/* NavLink permite resaltar automaticamente la pagina actual. */}
        <div className="flex flex-wrap items-center gap-2">
          <NavLink
            to="/"
            className={linkClasses}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/cart"
            className={linkClasses}
          >
            Carrito ({totalItems})
          </NavLink>

          <NavLink
            to="/login"
            className={linkClasses}
          >
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
