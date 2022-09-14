import React from 'react'
import { Home } from './home/Home';
import { About } from './about/About';
import './Main.scss'

export const Main = () => {
  return (
    <>
    <div className='main--content'>

        <div className='home'>
            <Home/>
        </div>
        <div className='about'>
            <About/>
        </div>
    </div>
    </>
  )
}
