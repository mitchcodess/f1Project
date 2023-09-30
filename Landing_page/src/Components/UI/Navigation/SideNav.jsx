import React from 'react'
import './SideNav.css'
import { motion, useScroll } from "framer-motion"


export default function SideNav({children}) {
  

function handleClick() {

}

  return (
    <> 
     
    <nav className='history-side-nav-container'>
      <ul className='history-side-nav'>
        {children}
      </ul>
    </nav>
    </>
  )
}
