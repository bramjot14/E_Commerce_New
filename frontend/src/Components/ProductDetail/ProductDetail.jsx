import React from 'react';
import "./ProductDetail.css";
import { Link, useParams } from 'react-router-dom';
import { products } from "./Product";
import { productGallery } from "./ProductGallery";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  if (product.id == 1) {
    
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-item" key={product.id}>
          <div className="left">
          <Link to={`/ProductDetail/${product.id}`}>
            <img src={product.image} className='product-detail-image' alt={product.name} />
            <Link to={`/ProductDetail/${product.id}`}>
            <img src={productGallery.image} className='product-detail-image' alt={product.name} />
            <img src={productGallery.image2} className='product-detail-image' alt={product.name} />
            <img src={productGallery.image3} className='product-detail-image' alt={product.name} />
            <img src={productGallery.image4} className='product-detail-image' alt={product.name} />
            <img src={productGallery.image5} className='product-detail-image' alt={product.name} />
            </Link>
          </Link>
          </div>
          <div className="right">
          <h1>{product.name}</h1>
          <h4>
            <img src="../Assets/star_Icon.png" alt="" className='star'/>
            <img src="../Assets/star_Icon.png" alt="" className='star'/>
            <img src="../Assets/star_Icon.png" alt="" className='star'/>
            <img src="../Assets/star_Icon.png" alt="" className='star'/>
            <img src="../Assets/star_dull_Icon.png" alt="" className='star' />
           ( 4.0 )
          </h4>
          <h4 className='product-detail-description'>{product.description}</h4>
          <div className="prices">
          <h1 className='product-detail-price'>${product.price}</h1>
          <h1 className='product-detail-price2'>${product.originalPrice}</h1>
          </div>
          <div className="product-detail-buttons">
          <button className='product-detail-btn1'>Add to Cart</button>
          <button className='product-detail-btn2'>Buy now</button>
          </div>
          </div>
          </div>
        </div>
  );
};

export default ProductDetail;
