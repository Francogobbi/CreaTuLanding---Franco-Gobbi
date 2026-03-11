import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {

    const existing = cart.find(prod => prod.id === item.id);

    if(existing){

      const newCart = cart.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );

      setCart(newCart);

    } else {

      setCart([...cart, { ...item, quantity }]);

    }
  };

  const totalQuantity = () => {

    return cart.reduce((acc, prod) => acc + prod.quantity, 0);

  };

  const totalPrice = () => {

    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  };

  const clearCart = () => setCart([]);

  return (

    <CartContext.Provider value={{
      cart,
      addItem,
      totalQuantity,
      totalPrice,
      clearCart
    }}>

      {children}

    </CartContext.Provider>
  );
};