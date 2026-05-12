import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

    const { cartItems } = useContext(CartContext);

    return (

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

            <Link
                to="/"
                className="text-2xl font-bold"
            >
                Ecommerce
            </Link>

            <div className="flex gap-6">

                <Link
                    to="/"
                    className="font-medium hover:text-blue-600"
                >
                    Inicio
                </Link>

                <Link
                    to="/cart"
                    className="font-medium hover:text-blue-600"
                >
                    Carrito ({cartItems.length})
                </Link>

                <Link
                    to="/login"
                    className="font-medium hover:text-blue-600"
                >
                    Login
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;