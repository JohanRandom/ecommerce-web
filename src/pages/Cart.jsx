import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import api from "../api/axios";

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

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8">

        <h1 className="text-4xl font-bold mb-8">
          Carrito
        </h1>

        {cartItems.length === 0 ? (

          <p className="text-gray-600">
            El carrito está vacío
          </p>

        ) : (

          <div className="space-y-4">

            {cartItems.map(item => (

              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center"
              >

                <div>

                  <h2 className="text-2xl font-semibold">

                    {item.name}

                  </h2>

                  <p className="text-gray-600">

                    Cantidad: {item.quantity}

                  </p>

                  <p className="text-xl font-bold mt-2">

                    ${(item.price * item.quantity).toLocaleString()}

                  </p>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
                >

                  Eliminar

                </button>

              </div>

            ))}

            <div className="bg-white p-6 rounded-2xl shadow-md mt-8">

              <h2 className="text-3xl font-bold">

                Total: ${total.toLocaleString()}

                <button
                  onClick={checkout}
                  className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
                >

                  Finalizar compra

                </button>

              </h2>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Cart;