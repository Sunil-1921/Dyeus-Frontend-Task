import React from 'react'
import './FourthService.scss'
import doc from '../../../img/doctor.png'

export const FourthService = () => {
  return (
    <>
        <div className='service-4'>
            <h1 className='service-4--heading'>Consult with wellness experts</h1>
            <p className='service-4--content'>Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you.</p>
            <button className='service-4--btn'><p className='service-4--btn-content'>Get a consultation</p></button>
            <img className='service-4--image' src={doc} alt="" />
        </div>
    </>
  )
}
