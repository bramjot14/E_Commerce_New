import React from 'react'
import "./Form.css";

const Form = () => {
  return (
    <div className='form-container'>  
    <div className='Form'>
   <div>
     <h1 className='CallToAction_heading'>Subscribe now & get 20% off</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam incidunt rerum?</p>
    <div className='formbtn'>
  <input 
    type="email" 
    className="email" 
    placeholder="Enter your email id" 
    required 
  />
  <button className='Subscribe_btn' type="submit">Subscribe</button>
    </div> 
    </div>
 </div>
 </div>
  )
}

export default Form