import React from 'react'
import { FirstService } from './FirstService/FirstService'
import { FourthService } from './FourthService/FourthService'
import { SecondService } from './SecondService/SecondService'
import { ThirdService } from './ThirdService/ThirdService'

export const Service = () => {
  return (
    <>
        <FirstService/>
        <SecondService/>
        <ThirdService/>
        <FourthService/>
    </>
  )
}
