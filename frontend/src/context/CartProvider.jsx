import React, { useEffect } from 'react'
import { useState } from 'react'
import CartContext from './CartContext'

const cartLocalStorage = JSON.parse(localStorage.getItem("cartItems") || "[]")

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(cartLocalStorage);

    useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems] )

    const removeItemFromCart = (itemToDelete) => {
      const cartStorageFilter = cartItems.filter((item) => {
        return item.id !== itemToDelete
      })
      setCartItems(cartStorageFilter)

      // localStorage.setItem("cartItems", JSON.stringify(cartStorageFilter))
    }
  
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

        // getCartTotal – total price
        const getCartTotal = () => {
          let total = 0;
   
           cartItems.forEach((item) => (
             total += item.price * item.quantity
           ));
   
           return total;
       }

       // getTotalItems – total quantity (navbar badge)
       const getTotalItems = () => {
        let count = 0;

        cartItems.forEach((item) => {
          count += item.quantity
        });

        return count;
       }
    
    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartTotal, getTotalItems }}>
        {children}
      </CartContext.Provider>
    );
}
