import React from 'react'
import BahrainSVG from './bahrain'
import './LoadingPage.css'
export default function LoadingPage() {
  return (
    <div className='loading-page-container'>
      <BahrainSVG stroke={'#FFFFFF'} strokeWidth={'4'} />
    </div>
  )
}
