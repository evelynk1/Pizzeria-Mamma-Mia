import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //  Agrega producto
 const addToCart = (pizza) => {
  console.log("🔥 CLICK ADD:", pizza);
    setCart((prev) => {
      const existe = prev.find((item) => item.id === pizza.id);

      if (existe) {
        return prev.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...pizza, quantity: 1 }];
    });
  };

  // Quita producto
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /*  para eliminar */
  const deleteFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        deleteFromCart, 
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;