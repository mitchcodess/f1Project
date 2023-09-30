import React from 'react'
import SideBySide from '../UI/Cards/SideBySide'
import './YearSection.css' 
import { forwardRef } from 'react'
const YearSection = forwardRef(function YearSection(props, ref) {


  //Object containing these values 

    
      
     [
      {
        src: '',
        header: '',
        description: ''
      },
      {
        src: '',
        header: '',
        description: ''
      },
      {
        src: '',
        header: '',
        description: ''
      }
      ]
    


    
  
  

  return (
    <div className='year-section-container' ref={ref}>
      <div className='year-section-header'> 
       <h1>{props.year}</h1>
       </div>
      {props.children}
    </div>
  )
}
)

export default YearSection;