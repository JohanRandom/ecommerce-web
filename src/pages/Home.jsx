import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Home() {

  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {

    api.get("/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8">

        <h1 className="text-4xl font-bold mb-8">
          Productos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {Array.isArray(products) && products.map(product => (

            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >

              <div className="h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">

                <span className="text-gray-500">
                  Imagen
                </span>

              </div>

              <h2 className="text-2xl font-semibold mb-2">
                {product.name}
              </h2>

              <p className="text-gray-600 mb-4">
                {product.description}
              </p>

              <div className="flex justify-between items-center">

                <p className="text-3xl font-bold">
                  ${product.price.toLocaleString()}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"
                >

                  Agregar

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;