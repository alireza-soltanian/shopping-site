
import React, { createContext, useContext, useState } from 'react';

// ایجاد Context
const CartContext = createContext();

// کامپوننت Provider
export const CartProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (price) => {
    setItemCount((prevCount) => prevCount + 1);
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  return (
    <CartContext.Provider value={{ itemCount, totalPrice, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// هک برای استفاده از Context
export const useCart = () => {
  return useContext(CartContext);
};

