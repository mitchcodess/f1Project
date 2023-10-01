import React from 'react'
import SideBySide from '../UI/Cards/SideBySide'
import './YearSection.css' 
import { forwardRef } from 'react'
const YearSection = forwardRef(function YearSection(props, ref) {


  return (
    <div className='year-section-container' ref={ref}>
      <div className='year-section-header'> 
       <h1>{props.year}</h1>
       </div>
       <div className='year-section-info-cards'>
      {props.children}
      </div>
    </div>
  )
}
)

export default YearSection;