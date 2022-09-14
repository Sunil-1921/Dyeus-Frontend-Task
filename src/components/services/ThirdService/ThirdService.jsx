import React from 'react'
import './ThirdService.scss'
import cal from '../../../img/calendar.png'

export const ThirdService = () => {
  return (
    <>
        <div className='service-3'>
            <h1 className='service-3--heading'>Track your period</h1>
            <p className='service-3--content'>Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data.</p>
            <button className='service-3--btn'><p className='service-3--btn-content'>Track your period on the app</p></button>
        </div>
        <img className='service-3--image' src={cal} alt="" />
    </>
  )
}
