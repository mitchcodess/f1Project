import React from 'react'
import { motion } from 'framer-motion'
export default function FadeUp({children}) {
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
        {children}
    </motion.div>
  )
}
