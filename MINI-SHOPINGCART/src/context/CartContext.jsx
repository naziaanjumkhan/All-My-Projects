import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Add Product
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qyt: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  //remove product
  const removeFromCart = (id)=>{
    setCart((prev)=> prev.filter((item) =>item.id !== id))
  };

 //update product
  const updateQty = (id,qty)=>{
    setCart((prev)=> prev.map((item)=>
     (item.id === id ? {...item, qty} : item)))

  }

  //sub total 

  const total = cart.reduce((sum, item)=>sum + item.price * item.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, total }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);