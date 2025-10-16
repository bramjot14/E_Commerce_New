import React from 'react';
import "./FeaturedProducts.css"

const FeaturedProducts = () => {
  return (
    <div className='container'>
      <div className="container2">
          <img className='a' src="../Assets/girl_with_headphone_image.png" alt=""/>
          
          <div class="bottom-left"><div className="main"><h5>Unparalleled Sound</h5>
          <p>Get headphones with crystal-clear audio</p>
          <button className='featuredProducts-btn' type="submit">Buy Now</button>
          </div>
          </div>
 </div>
          <div className="container3">
            <img className='b' src="../Assets/girl_with_earphone_image.png" alt=""/>
          
          <div class="bottom-left"><div className="main"><h5>Stay Connected</h5>
          <p>Compact and stylish earphones</p>
          <button className='featuredProducts-btn' type="submit">Buy Now</button>
          </div></div>
 </div>
          <div className="container4">
          <img className='c' src="../Assets/boy_with_laptop_image.png" alt=""/>
         
          <div class="bottom-left"> <div className="main"><h5>Power in Every Pixel</h5>
          <p>Shop the latest laptops</p>
          <button className='featuredProducts-btn' type="submit">Buy Now</button>
          </div>
          </div>
 </div>

 </div>
  )
}
export default FeaturedProducts