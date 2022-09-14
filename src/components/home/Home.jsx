import React from 'react'
import './Home.scss'
import tube from '../../img/tube-icon.png'
import star from '../../img/star-icon.png'
import call from '../../img/call-icon.png'

export const Home = () => {
  return (
    <>
    <div className='home--box'>
        
        <div className='home--title'>About Diana</div>
        <div className='home--heading'>A platform that looks out for you
        </div>
        <div className='home--content'>Diana empowers you to understand how your body works so you can look and feel your best.</div>
        <hr/>
        
        <div className='main--content'>

            <div className='main--heading'>Our Philosophy</div>    
            <div className='main--sub-heading'>Sustainable wellness is a big-picture, inside out approach</div>
            
            <div className='main--sub-heading-content'>Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. 
            <br/>
            <br/>
            That’s why we’ve created an integrated ecosystem of:</div>

            <div className='main-list'>
                <div className='list'>
                    <img className='list--image' src={tube}></img>
                    <div className='list--content'>Consciously formulated products that deliver feel-good results fast</div>
                </div>
                <div className='list'>
                    <img className='list--image' src={star}></img>
                    <div className='list--content'>In-app mood and period tracking options that help you cultivate a deeper connections with your mind and body</div>
                </div>
                <div className='list'>
                    <img className='list--image' src={call}></img>
                    <div className='list--content'>In-app consultation portals that connect you with compassionate wellness experts</div>
                </div>
            <div className='test'>Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.</div>
            </div>

        
        </div>


    </div>
    </>
  )
}
