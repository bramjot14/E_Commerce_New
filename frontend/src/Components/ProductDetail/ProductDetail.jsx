import React from 'react';
import "./ProductDetail.css";
import { Link, useParams } from 'react-router-dom';
import { products } from "./Product";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-item" key={product.id}>
        <br /><br />
          <div className="left">
          <Link to={`/ProductDetail/${product.id}`}>
            <img src={product.image} className='product-detail-image' alt={product.name} />
          </Link>
          </div>
          <div className="right">
          <h5>{product.name}</h5>
          <h6>
            <img src="../Assets/star_Icon.png" alt="" />
            <img src="../Assets/star_Icon.png" alt="" />
            <img src="../Assets/star_Icon.png" alt="" />
            <img src="../Assets/star_Icon.png" alt="" />
            <img src="../Assets/star_dull_Icon.png" alt="" />
           ( 4.0 )
          </h6>
          <h6 className='product-detail-description'>{product.description}</h6>
          <h5 className='product-detail-price'>${product.price}</h5>
          <button className='product-detail-btn'>Buy now</button>
          </div>
          </div>
        </div>
  );
};

export default ProductDetail;
