import React from 'react'
import './SideBySide.css'
import { motion } from "framer-motion"
import {forwardRef} from 'react'
import WrapperFadeUp from '../Animation/WrapperFadeUp'
const SideBySide = forwardRef(function SideBySide(props, ref) {
    
  return (
    <>
   <WrapperFadeUp>
    {props.picleft ?  
       <div className='sbs-container' ref={ref}>
       <div className='sbs-text-container'>
           <h2>{props.data.header}</h2>
           <p>{props.data.description}</p>
       </div>
       <div className='sbs-image-container'>
           <img src={props.data.src}/>
       </div>
       </div>  

       :
    
    <div className='sbs-container' ref={ref}>
        <div className='sbs-image-container'>
            <img src={props.data.src}/>
        </div>
        <div className='sbs-text-container'>
            <h2>{props.data.header}</h2>
            <p>{props.data.description}</p>
        </div>
    </div> 
    
    }
    </WrapperFadeUp>
    </>
  )
})

export default SideBySide;