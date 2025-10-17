import React from 'react'
import "./ProductList.css"
import { products } from './Products'
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <div className="product-list-container">
      {products.map(productItem => (
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
      ))}
    </div>
  );
};

export default ProductList;
