
import React, { useState, useEffect } from 'react';
import "./ProductList.css"
// import { products } from './Products'
import { Link } from 'react-router-dom';


const ProductList = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:5002/allProducts");
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo(); // Call the function inside useEffect
  }, []);

  const remove_product = async (id) => {
    try {
      await fetch('http://localhost:5002/removeproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });

      await fetchInfo(); // Refresh the product list after deletion
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <div className="product-list-container">
    {allproducts.map((productItem, index) => (
        <React.Fragment key={index}>
        <div className="product-list-item" key={productItem.id}>
          <br /><br />
          <div className="product-list-top">
            <Link to={`/ProductDetail/${productItem.id}`}>
              <img src={productItem.image} className='product-list-image' alt="" />
            </Link>
            <br />
            <h5>{productItem.name}</h5>
            <h6 className='product-list-description'>{productItem.description}</h6>
            <h6>
              4.0 
              <img src="../Assets/star_Icon.png" alt="" />
              <img src="../Assets/star_Icon.png" alt="" />
              <img src="../Assets/star_Icon.png" alt="" />
              <img src="../Assets/star_Icon.png" alt="" />
              <img src="../Assets/star_dull_Icon.png" alt="" />
            </h6>
          </div>
          <div className="product-list-bottom">
            <h5 className='product-list-price'>${productItem.price}</h5>
            <button className='product-list-btn'>Buy now</button>
          </div>
        </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductList;



// import React from 'react'
// import "./ProductList.css"
// import { products } from './Products'
// import { Link } from 'react-router-dom';

// const ProductList = () => {
//   return (
//     <div className="product-list-container">
//       {products.map(productItem => (
//         <div className="product-list-item" key={productItem.id}>
//           <br /><br />
//           <div className="product-list-top">
//             <Link to={`/ProductDetail/${productItem.id}`}>
//               <img src={productItem.image} className='product-list-image' alt="" />
//             </Link>
//             <br />
//             <h5>{productItem.name}</h5>
//             <h6 className='product-list-description'>{productItem.description}</h6>
//             <h6>
//               4.0 
//               <img src="../Assets/star_Icon.png" alt="" />
//               <img src="../Assets/star_Icon.png" alt="" />
//               <img src="../Assets/star_Icon.png" alt="" />
//               <img src="../Assets/star_Icon.png" alt="" />
//               <img src="../Assets/star_dull_Icon.png" alt="" />
//             </h6>
//           </div>
//           <div className="product-list-bottom">
//             <h5 className='product-list-price'>${productItem.price}</h5>
//             <button className='product-list-btn'>Buy now</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
