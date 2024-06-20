import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext(); // Create context

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('Cart')) || []
  );

  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addProductToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems((prevState) =>
        prevState.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
