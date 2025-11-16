import React, { useState, useEffect } from 'react';
import "./ProductDetail.css";
import { Link, useParams } from 'react-router-dom';
// import { products } from "./Product";

const ProductDetail = () => {

  // const { id } = useParams();
  // const product = products.find((item) => item.id === Number(id));
  // const [mainImage, setMainImage] = useState(product.Image);

  // if (!product) {
  //   return <h2>Product not found</h2>;
  // }

  // const handleThumbnailClick = (imageUrl) => {
  //   setMainImage(imageUrl);
  // };

  const [productdetail, setproductdetail] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:5002/productdetail");
      const data = await response.json();
      setproductdetail(data);
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
    {productdetail.map((productItem, index) => ( 
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
            <h5 className='product-list-price'>${productItem.orignal_price}</h5>
            <button className='product-list-btn'>Buy now</button>
          </div>
        </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductDetail;



// import React, { useState, useEffect } from 'react';
// import "./ProductDetail.css";
// import { Link, useParams } from 'react-router-dom';
// // import { products } from "./Product";


// const ProductDetail = () => {
//   const { id } = useParams();
//   const product = products.find((item) => item.id === Number(id));
//   const [mainImage, setMainImage] = useState(product.Image);



//   if (!product) {
//     return <h2>Product not found</h2>;
//   }

//   const handleThumbnailClick = (imageUrl) => {
//     setMainImage(imageUrl);
//   };

//   return (
//     <div className="product-detail-container">
//       <div className="product-detail-item" key={product.id}>
//       <div className="left">
//   <Link to={`/ProductDetail/${product.id}`}>
//     <img src={mainImage} alt="" className='product-detail-image'/>

//     {product.images?.map((img, index) => (
//       <img key={index} src={img} 
//       className='product-detail-images' 
//       alt={`${product.name} thumbnail ${index + 1}`} 
//       onClick={() => handleThumbnailClick(img)} />
//     ))}

//   </Link>
// </div>
//           <div className="right">
//           <h1>{product.name}</h1>
//           <h4>
//             <img src="../Assets/star_Icon.png" alt="" className='star'/>
//             <img src="../Assets/star_Icon.png" alt="" className='star'/>
//             <img src="../Assets/star_Icon.png" alt="" className='star'/>
//             <img src="../Assets/star_Icon.png" alt="" className='star'/>
//             <img src="../Assets/star_dull_Icon.png" alt="" className='star' />
//            ( 4.0 )
//           </h4>
//           <h4 className='product-detail-description'>{product.description}</h4>
//           <div className="prices">
//           <h1 className='product-detail-price'>${product.price}</h1>
//           <h1 className='product-detail-price2'>${product.originalPrice}</h1>
//           </div>
//           <div className="product-detail-buttons">
//           {/* <button className='product-detail-btn1'>Add to Cart</button> */}
//           <AddtoCart id={product.id} name={product.name} price={product.price} />
//           <button className='product-detail-btn2'>Buy now</button>
//           </div>
//           </div>
//           </div>
//         </div>
//   );
// };

// export default ProductDetail;





// import React from 'react';
// import "./ProductDetail.css";
// import { Link, useParams } from 'react-router-dom';
// import { products } from "./Product";
// import { useState } from 'react';


// const ProductDetail = () => {
//   const { id } = useParams();
//   const product = products.find((item) => item.id === Number(id));
//   const [mainImage, setMainImage] = useState(product.Image);



//   if (!product) {
//     return <h2>Product not found</h2>;
//   }

//   const handleThumbnailClick = (imageUrl) => {
//     setMainImage(imageUrl);
//   };

//   return (
//     <div className="product-detail-container">
//       <div className="product-detail-item" key={product.id}>
//       <div className="left">
//   <Link to={`/ProductDetail/${product.id}`}>
//     <img src={mainImage} alt="" className='product-detail-image'/>

//     {product.images?.map((img, index) => (
//       <img key={index} src={img} 
//       className='product-detail-images' 
//       alt={`${product.name} thumbnail ${index + 1}`} 
//       onClick={() => handleThumbnailClick(img)} />
//     ))}

//   </Link>
// </div>
//           <div className="right">
//           <h1>{product.name}</h1>
//           <h4>
//             <img src="../Assets/star_Icon.png" alt="" className='star'/>
//             <img src="../Assets/star_Icon.png" alt="" className='star'/>
//             <img src="../Assets/star_Icon.png" alt="" className='star'/>
//             <img src="../Assets/star_Icon.png" alt="" className='star'/>
//             <img src="../Assets/star_dull_Icon.png" alt="" className='star' />
//            ( 4.0 )
//           </h4>
//           <h4 className='product-detail-description'>{product.description}</h4>
//           <div className="prices">
//           <h1 className='product-detail-price'>${product.price}</h1>
//           <h1 className='product-detail-price2'>${product.originalPrice}</h1>
//           </div>
//           <div className="product-detail-buttons">
//           {/* <button className='product-detail-btn1'>Add to Cart</button> */}
//           <AddtoCart id={product.id} name={product.name} price={product.price} />
//           <button className='product-detail-btn2'>Buy now</button>
//           </div>
//           </div>
//           </div>
//         </div>
//   );
// };

// export default ProductDetail;
