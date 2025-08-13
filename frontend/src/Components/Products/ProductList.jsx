import React from 'react'
import "./ProductList.css"
import { products } from './Products'

const ProductList = () => {
    return (
        <div className="product-list">
            <h3>Products</h3>
            {products.map(productItem => (
                <div className="productItems" key={productItem.id}>
                    <img src={productItem.image} className='productImage' alt="" />
                    <h3>{productItem.name}</h3>
                    <h4>${productItem.price}</h4>
                </div>
            ))}
        </div>
      );
    };

export default ProductList