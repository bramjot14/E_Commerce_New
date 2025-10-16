import React from 'react'
import "./ProductDetail.css"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import {products} from "../Products/Products"

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    return <h2>Product not found</h2>;
  }
  return (
    <div className="product-list">

            <div className="productItems" key={product.id} id= {id}>
                <br /><br />
                <div className="top">
                <Link to={`/ProductDetail/${product.id}`}> <img src={product.image} className='productImage' alt="" /> </Link>
                <br />
                <h5>{product.name}</h5>
                <h6 className='description'>{product.description}</h6>
                <h6>4.0 <img src="../Assets/star_Icon.png" alt="" /><img src="../Assets/star_Icon.png" alt="" /><img src="../Assets/star_Icon.png" alt="" /><img src="../Assets/star_Icon.png" alt="" /><img src="../Assets/star_dull_Icon.png" alt="" /></h6>
                </div>
                <div className="bottom">
                <h5 className='price'>${product.price}</h5>
                <button className='product-btn'>Buy now</button>
                </div>
            </div>
    </div>
  );
}

export default ProductDetail