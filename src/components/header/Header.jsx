import React from 'react'
import './Header.scss'
import toggle from '../../img/toggle.png'
import cart from '../../img/cart.png'
import bell from '../../img/bell.png'

export const Header = () => {
  return (
    <>
    <header className='header'>

        {/* for mobile */}
        <div className='header--btn'>
            <img className='header--toggle' src={toggle}></img>
        </div>
        <div className='header--icons'>
            <img className='icon' src={cart}></img>
            <img className='icon' src={bell}></img>
        </div>
        {/*  */}

        {/* for desktop */}
        <div className='header--items'>
            <li className='item'>Home</li>
            <li className='item'>About Us</li>
        </div>
        {/*  */}

    </header>
    </>
  )
}
