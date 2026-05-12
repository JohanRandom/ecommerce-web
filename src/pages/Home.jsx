import { useEffect, useState } from "react";
import api from "../api/axios";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    api.get("/products")
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error:", error);
      });

  }, []);

  return (
    <div>

      <h1>Productos</h1>

      {Array.isArray(products) && products.map(product => (

        <div key={product.id}>

          <h3>{product.name}</h3>

          <p>${product.price}</p>

        </div>

      ))}

    </div>
  );
}

export default Home;