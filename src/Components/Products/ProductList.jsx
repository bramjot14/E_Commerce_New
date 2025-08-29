import React from 'react'
import "./ProductList.css"
import { products } from './Products'

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map(productItem => (
                <div className="productItems" key={productItem.id}>
                    <br /><br />
                    <div className="top">
                    <img src={productItem.image} className='productImage' alt="" />
                    <br />
                    <h5>{productItem.name}</h5>
                    <h6 className='description'>{productItem.description}</h6>
                    <h6>4.0 <img src="../Assets/star_Icon.png" alt="" /><img src="../Assets/star_Icon.png" alt="" /><img src="../Assets/star_Icon.png" alt="" /><img src="../Assets/star_Icon.png" alt="" /><img src="../Assets/star_dull_Icon.png" alt="" /></h6>
                    </div>
                    <div className="bottom">
                    <h5 className='price'>${productItem.price}</h5>
                    <button className='product-btn'>Buy now</button>
                    </div>
                </div>
            ))}
        </div>
      );
    };

export default ProductList