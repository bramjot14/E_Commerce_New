import React from 'react'
import "./CallToAction.css"

const CallToAction = () => {
  return (
    <div className='CallToAction'>
       <img className='CallToAction_img' src="../Assets/jbl_soundbox_image.png" alt="" /> 
      <div>
        <h2 className='CallToAction_heading'>Level Up Your <br /> Gaming Experience</h2>
       <p>From immersive sound to precise controls- <br />everything you need to win</p> <p><button className='CallToAction_btn'>Buy Now</button></p>
       </div> 
       <img className='CallToAction_img' src="../Assets/controller_image.png" alt="" /> 
    </div>
  )
}

export default CallToAction