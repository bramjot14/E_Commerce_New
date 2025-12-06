import React, { useState, useEffect } from 'react';
import "./ProductDetail.css";
import { Link, useParams } from 'react-router-dom';
// import { products } from "./Product";

const ProductDetail = () => {

  const [productdetail, setproductdetail] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { id } = useParams();


  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:5002/productdetail");
      const data = await response.json();
      setproductdetail(data);
      const product = data.find(p => p.id === Number(id)); // URL id comes as string, so convert to number to match product ids
      setSelectedProduct(product);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo(); // Call the function inside useEffect
  }, []);

  if (!selectedProduct) {
    return <p>Loading product...</p>;
  }  

  return (
    
<div className="product-detail-container">
  <div className="product-detail-item" key={selectedProduct.id}>

    <div className="left">
      <Link to={`/ProductDetail/${selectedProduct.id}`}>
        <img
          src={selectedProduct.image}
          className="product-detail-image"
          alt=""
        />
      </Link>
    </div>

    <div className="right">
      <h1>{selectedProduct.name}</h1>

      <h4>
        <img src="../Assets/star_Icon.png" alt="" className="star" />
        <img src="../Assets/star_Icon.png" alt="" className="star" />
        <img src="../Assets/star_Icon.png" alt="" className="star" />
        <img src="../Assets/star_Icon.png" alt="" className="star" />
        <img src="../Assets/star_dull_Icon.png" alt="" className="star" />
        ( 4.0 )
      </h4>

      <h4 className="product-detail-description">
        {selectedProduct.description}
      </h4>

      <div className="prices">
        <h1 className="product-detail-price">
          ${selectedProduct.price}
        </h1>
        <h1 className="product-detail-price2">
          ${selectedProduct.original_price}
        </h1>
      </div>

      <div className="product-detail-buttons">
      <Link to={`/Cart`}>
        <button  className="product-detail-btn2">Buy now</button>
        </Link>
      </div>
    </div>

  </div>
</div>

      );
};
export default ProductDetail;


  // const remove_product = async (id) => {
  //   try {
  //     await fetch('http://localhost:5002/removeproduct', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ id: id }),
  //     });

  //     await fetchInfo(); // Refresh the product list after deletion
  //   } catch (error) {
  //     console.error("Error removing product:", error);
  //   }
  // };
