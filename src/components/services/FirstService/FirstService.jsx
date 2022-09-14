import React from 'react'
import './FirstService.scss'
import flower from '../../../img/flower.png'

export const FirstService = () => {
  return (
    <>
    <div className='service-1'>
        <div className='service-1--title'>Liberate your everyday wellness</div>
        <div className='service-1--heading'>Shop our self-care products</div>
        <p className='service-1--content'>Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.</p>
        <button className='service-1--btn'><p className='btn--content'>Upgrade your self-care</p></button>
        <p className='service-1--hashtag'>#NoNasties, we promise!</p>
        <img className='service-1--image' src={flower} alt="flower" />
    </div>
    </>
  )
}
