import React from 'react'
import './SecondService.scss'
import img1 from '../../../img/img1.png'
import img2 from '../../../img/img2.png'
import img3 from '../../../img/img3.png'
import img4 from '../../../img/img4.png'

export const SecondService = () => {
  return (
    <>
    <div className='service-2'>
        <h1 className='service-2--heading'>Track your mood</h1>
        <p className='service-2--content'>All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day.</p>
        <button className='service-2--btn'><p className='service-2--btn-content'>Track your mood on the app</p></button>
        <div className='service-2--imgs'>
            <img className='service-2--image' src={img1} alt="" />
            <img className='service-2--image' src={img2} alt="" />
            <img className='service-2--image' src={img3} alt="" />
            <img className='service-2--image' src={img4} alt="" />
        </div>
    </div>
    </>
  )
}
