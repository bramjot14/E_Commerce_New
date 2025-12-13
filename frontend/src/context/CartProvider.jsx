import React from 'react'
import { useState } from 'react'
import CartContext from './CartContext'

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (item) => {
  
      setCartItems((prevItems) => {
  
        // Step 1: Check if item already exists
        const foundItem = prevItems.find((cartItem) => {
          return cartItem.id === item.id;
        });
  
        // Step 2: If item is already in cart, increase quantity
        if (foundItem) {
          const updatedCart = prevItems.map((cartItem) => {
            if (cartItem.id === item.id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity + 1
              };
            } else {
              return cartItem;
            }
          });
  
          return updatedCart;
        }
  
        // Step 3: If item is not in cart, add it with quantity 1
        const newItem = {
          ...item,
          quantity: 1
        };
  
        return [...prevItems, newItem];
      });
    };

    const removeFromCart = (id) => {
      setCartItems((items) => {
        const updatedItems = items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
    
        const filteredItems = updatedItems.filter((item) =>
         item.quantity > 0
        );
    
        return filteredItems;
      });
    };
    
    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    );
  };


