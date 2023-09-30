import React from 'react'
import './SideBySide.css'
import { motion } from "framer-motion"
import {forwardRef} from 'react'
const SideBySide = forwardRef(function SideBySide(props, ref) {

  return (
    <motion.div 
    initial={{ opacity: 0, y:75 }}
    whileInView={{ opacity: 1, y:0 }}
    intial='hidden'
    animate='visible'
    transition={{
        duration: 0.75, delay: 0.25
    }}
    viewport={{ once: true }}>

    <div className='sbs-container' ref={ref}>
        <div className='sbs-image-container'>
            <img src={props.src}/>
        </div>
        <div className='sbs-text-container'>
            <h2>{props.header}</h2>
            <p>{props.description}</p>
        </div>
    </div>
    </motion.div>
  )
})

export default SideBySide;