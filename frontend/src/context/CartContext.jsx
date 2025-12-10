import React from 'react'
import { createContext } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  getTotalPrice: () => 0,
});

const CartContext = () => {

  
  return (
    <div>CartContext</div>
  )
}

export default CartContext