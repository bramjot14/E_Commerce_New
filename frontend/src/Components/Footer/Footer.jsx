import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-left'>
        <h2 className='Footer_heading'>
          <img src="../Assets/logo.svg" width="150px" alt="Logo" />
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dignissimos dolor vel similique deleniti. Accusamus ratione iure quisquam? Temporibus consectetur eos consequuntur! Ipsam eveniet necessitatibus veniam quisquam sit facere in nostrum nemo! Vitae aliquam, quo sunt voluptates iusto.</p>
      </div> 

      <div className='Footer-col'>
  <h3>Company</h3>
  <ul>
    <li>Home</li>
    <li>About us</li>
    <li>Contact us</li>
    <li>Privacy policy</li>
  </ul>
</div>

<div className='Footer-col'>
  <h3>Get in touch</h3>
  <ul>
  <li>
      <a href="tel:+14379371932">+1 437-937-1932</a>
    </li>
    <li>
      <a href="mailto:bramjot9874@gmail.com">bramjot9874@gmail.com</a>
    </li>
  </ul>
</div>

    </div>
  )
}

export default Footer
