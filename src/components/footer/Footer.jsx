import React from 'react'
import './Footer.scss'

export const Footer = () => {
  return (
    <>
    <div className='last'><p className='last--content'>With Diana, you’re in control of your health, your every day, and your story.</p></div>
    
    <footer className='footer'>
        <div className='footer--icons'>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
        <div className='footer--links'>
            <li>Products</li>
            <li>Our Science</li>
            <li>Vision & Mission</li>
            <li>About Us</li>
        </div>
        <hr/>
        <p className='footer--newsletter'>Subscribe to our Newsletter</p>
        <input className='footer--mail-input' placeholder='Enter your email...'></input>
        <button className='footer--btn'><p className='footer--btn-content'>Activate</p></button>
    </footer>
    </>
  )
}
