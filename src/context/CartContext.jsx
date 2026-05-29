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
    // Cada cambio del carrito se guarda para no perderlo al refrescar la página.
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  function addToCart(product) {
    setCartItems(prevItems => {
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

      return [
        ...prevItems,
        { ...product, quantity: 1 }
      ];
    });
  }

  function removeFromCart(productId) {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== productId)
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  // Total calculado a partir del estado actual; evita guardar datos duplicados.
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
