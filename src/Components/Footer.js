import React from 'react'
import "./Footer.css"
import cityImage from "../assets/city.webp"
import leftImage from "../assets/pngtree-welcome-concept-flat-vector-for-app-png-image_6320996.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='leftImage'>
        <h2>Welcome to our new website</h2>
         <img src={leftImage} alt='city' />
       <a href="/">Learn about VIRGINAMERICA.COM</a>
      </div>
      <div className='rightImage'>
        <h2>Deals from $49 to your favourite cities</h2>
      <img src={cityImage} alt='city' />
       <a href="/">SEE ALL DEALS</a>
      </div>
    </div>
  )
}

export default Footer
