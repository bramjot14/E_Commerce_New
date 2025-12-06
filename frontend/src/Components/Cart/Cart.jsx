// import React from 'react'
// import "./Cart.css"

// const Cart = () => {
//   return (
//     <div className='cart-container'>

// <div className="left">
// <br />
// <div className='cartHeading'>
//     <h1 className='cartHeading1'>Your Cart</h1>
//     <h2 className='cartHeading2'>Total Items</h2>
// </div>
// <hr />
// <br />
// <div className="flexContainer">
// <div class="flex-item">cart Details</div>
// <div class="flex-item">Price</div>
// <div class="flex-item">Quantity</div>
// <div class="flex-item">Subtotal</div>
// </div>
// </div>

//     </div>
//   )
// }

// export default Cart





import React, { useState, useEffect } from 'react';
import "./Cart.css"
import { Link } from 'react-router-dom';


const Cart = () => {
  const [cart, setCart] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:5002/addcartItem");
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error("Error fetching carts:", error);
    }
  };            

  useEffect(() => {
    fetchInfo(); // Call the function inside useEffect
  }, []);

  const remove_cartItem = async (id) => {
    try {
      await fetch('http://localhost:5002/removecartItem', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });

      await fetchInfo(); // Refresh the cart after deletion
    } catch (error) {
      console.error("Error removing cartItem:", error);
    }
  };

  return (
    <div className="cart-list-container">
    {cart.map((cartItem, index) => (
        <React.Fragment key={index}>
        <div className="cart-list-item" key={cartItem.id}>
          <br /><br />
          <div className="cart-list-top">
            <Link to={`/cart/${cartItem.id}`}>
              <img src={cartItem.image} className='cart-list-image' alt="" />
            </Link>
            <br />
            <h5>{cartItem.name}</h5>
            <h6 className='cart-list-description'>{cartItem.title}</h6>

          </div>
          <div className="cart-list-bottom">
            <h5 className='cart-list-price'>${cartItem.price}</h5>
            <h5 className='cart-list-subtotal'></h5> 
            <h5 className='cart-list-totalItems'></h5>
          </div>
        </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cart;



// import React from 'react'
// import "./cartList.css"
// import { carts } from './carts'
// import { Link } from 'react-router-dom';

// const cartList = () => {
//   return (
//     <div className="cart-list-container">
//       {carts.map(cartItem => (
//         <div className="cart-list-item" key={cartItem.id}>
//           <br /><br />
//           <div className="cart-list-top">
//             <Link to={`/cartDetail/${cartItem.id}`}>
//               <img src={cartItem.image} className='cart-list-image' alt="" />
//             </Link>
//             <br />
//             <h5>{cartItem.name}</h5>
//             <h6 className='cart-list-description'>{cartItem.description}</h6>
//             <h6>
//               4.0 
//               <img src="../Assets/star_Icon.png" alt="" />
//               <img src="../Assets/star_Icon.png" alt="" />
//               <img src="../Assets/star_Icon.png" alt="" />
//               <img src="../Assets/star_Icon.png" alt="" />
//               <img src="../Assets/star_dull_Icon.png" alt="" />
//             </h6>
//           </div>
//           <div className="cart-list-bottom">
//             <h5 className='cart-list-price'>${cartItem.price}</h5>
//             <button className='cart-list-btn'>Buy now</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default cartList;

