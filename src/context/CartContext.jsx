import {
  useEffect,
  useState
} from "react";
import { CartContext } from "./cartContext";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  useEffect(() => {
    // Se guarda el estado actual del carrito en el almacenamiento local cada vez que hay un cambio para mantener la persistencia.
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  function addToCart(product) {
    setCartItems(prevItems => {
      // Se busca si el producto ya existe en el carrito para actualizar su cantidad.
      const existingItem = prevItems.find(
        item => item.id === product.id
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Si el producto es nuevo, se agrega con una cantidad inicial de uno.
      return [
        ...prevItems,
        { ...product, quantity: 1 }
      ];
    });
  }

  function removeFromCart(productId) {
    // Se eliminan todos los elementos que coincidan con el identificador proporcionado.
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== productId)
    );
  }

  function clearCart() {
    // Se restablece el carrito a una lista vacia para limpiar la seleccion.
    setCartItems([]);
  }

  // El calculo del valor total se realiza de forma dinamica basandose en el precio y la cantidad de cada producto.
  const total = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        total,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
