import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item._id === product._id && item.size === size
      );

      if (existing) {
        return prevCart.map((item) =>
          item._id === product._id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, size, quantity: 1 }];
    });
  };

  const removeFromCart = (id, size) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item._id === id && item.size === size)
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
