import React from 'react'
import './FIfthService.scss'
import potion from '../../../img/potion.png'

export const FIfthService = () => {
  return (
    <>
    <div className='service-5'>
            <h1 className='service-5--heading'>Get your personalized period box</h1>
            <img className='service-5--image' src={potion} alt="" />
            <p className='service-5--content'>Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app.</p>
            <button className='service-5--btn'><p className='service-5--btn-content'>Create your box on the app</p></button>
        </div>
    </>
  )
}
