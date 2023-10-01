import React from 'react'
import { useState , useRef} from 'react'
import LoadingPage from '../UI/Loading/LoadingPage'
import { Drawer } from '@mui/material'
import './History.css'
import Carousel from 'react-multi-carousel';
import SideBySide from '../UI/Cards/SideBySide'
import SideNav from '../UI/Navigation/SideNav'
import { motion, useScroll } from "framer-motion"
import historyData from '../../assets/historydata'
import YearSection from './YearSection'
import ThreeCard from '../Home/ThreeCard'
export default function History() {

  const { scrollYProgress } = useScroll();

  const year1950Ref = useRef()
  const year1960Ref = useRef()
  const year1970Ref = useRef()
  const year1980Ref = useRef()
  const year1990Ref = useRef()
  const year2000Ref = useRef()
  const year2010Ref = useRef()
  const year2020Ref = useRef()



    const [loading, setLoading] = useState(false)

    const handleScroll = (ref) => {
      ref.current?.scrollIntoView({behavior: 'smooth'}, {block: "end"})
}

console.log(historyData)
;
  return (
    <>
    { loading ? <LoadingPage/> : 
       <> 
        <motion.div className="scrollbar" style={{ scaleY: scrollYProgress}} />  
       <SideNav>
       {/* <li onClick={() => handleScroll(year2020Ref)}>2020</li> 
       <li onClick={() => handleScroll(year2010Ref)}>2010</li>
       <li onClick={() => handleScroll(year2000Ref)}>2000</li>
       <li onClick={() => handleScroll(year1990Ref)}>1990</li>
       <li onClick={() => handleScroll(year1980Ref)}>1980</li>
       <li onClick={() => handleScroll(year1970Ref)}>1970</li>
       <li onClick={() => handleScroll(year1960Ref)}>1960</li>
       <li onClick={() => handleScroll(year1950Ref)}>1950</li>
       <li onClick={() => handleScroll(year1960Ref)}>1960</li>
       <li onClick={() => handleScroll(year1970Ref)}>1970</li>
       <li onClick={() => handleScroll(year1980Ref)}>1980</li>
       <li onClick={() => handleScroll(year1990Ref)}>1990</li>
       <li onClick={() => handleScroll(year2000Ref)}>2000</li>
       <li onClick={() => handleScroll(year2010Ref)}>2010</li>
       <li onClick={() => handleScroll(year2020Ref)}>2020</li>  */}
        <li onClick={() => handleScroll(year1950Ref)}>1950</li>
        <li onClick={() => handleScroll(year1960Ref)}>1960</li>
        <li onClick={() => handleScroll(year1970Ref)}>1970</li>
        <li onClick={() => handleScroll(year1980Ref)}>1980</li>
        <li onClick={() => handleScroll(year1990Ref)}>1990</li>
        <li onClick={() => handleScroll(year2000Ref)}>2000</li>
        <li onClick={() => handleScroll(year2010Ref)}>2010</li>
        <li onClick={() => handleScroll(year2020Ref)}>2020</li>
       </SideNav>



      <YearSection year={'1950s'} ref={year1950Ref}>
        <SideBySide 
          data={historyData.year1950[0]} picleft={true}
        />
         <SideBySide 
          data={historyData.year1950[1]} 
        />
          <SideBySide 
          data={historyData.year1950[2]} picleft={true}
        />
          <SideBySide 
          data={historyData.year1950[3]} 
        />
 
        
      </YearSection>
      <YearSection year={'1960s'} ref={year1960Ref}>
      <SideBySide 
          data={historyData.year1960[0]} picleft={true}
        />
         <SideBySide 
          data={historyData.year1960[1]} 
        />
          <SideBySide 
          data={historyData.year1960[2]} picleft={true}
        />
          <SideBySide 
          data={historyData.year1960[3]} 
        />
          <SideBySide 
          data={historyData.year1960[4]} 
        />
      </YearSection>
      <YearSection year={'1970s'} ref={year1970Ref}>
      <SideBySide 
          data={historyData.year1970[0]} picleft={true}
        />
         <SideBySide 
          data={historyData.year1970[1]} 
        />
          <SideBySide 
          data={historyData.year1970[2]} picleft={true}
        />
          <SideBySide 
          data={historyData.year1970[3]} 
        />

      </YearSection>
      <YearSection year={'1980s'} ref={year1980Ref}>
      <SideBySide 
          data={historyData.year1980[0]} picleft={true}
        />
         <SideBySide 
          data={historyData.year1980[1]} 
        />
          <SideBySide 
          data={historyData.year1980[2]} picleft={true}
        />
          <SideBySide 
          data={historyData.year1980[3]} 
        />
       
      </YearSection>
      <YearSection year={'1990s'} ref={year1990Ref}>
      <SideBySide 
          data={historyData.year1990[0]} picleft={true}
        />
         <SideBySide 
          data={historyData.year1990[1]} 
        />
          <SideBySide 
          data={historyData.year1990[2]} picleft={true}
        />
          <SideBySide 
          data={historyData.year1990[3]} 
        />
      </YearSection>
      <YearSection year={'2000s'} ref={year2000Ref}>
      <SideBySide 
          data={historyData.year2000[0]} picleft={true}
        />
         <SideBySide 
          data={historyData.year2000[1]} 
        />
          <SideBySide 
          data={historyData.year2000[2]} picleft={true}
        />
          <SideBySide 
          data={historyData.year2000[3]} 
        />
      </YearSection>
      <YearSection year={'2010s'} ref={year2010Ref}>
      <SideBySide 
          data={historyData.year2010[0]} picleft={true}
        />
         <SideBySide 
          data={historyData.year2010[1]} 
        />
          <SideBySide 
          data={historyData.year2010[2]} picleft={true}
        />
          <SideBySide 
          data={historyData.year2010[3]} 
        />
  
      </YearSection>
      <YearSection year={'2020s'} ref={year2020Ref}>
      <SideBySide 
          data={historyData.year2020[0]} picleft={true}
        />
         <SideBySide 
          data={historyData.year2020[1]} 
        />
          <SideBySide 
          data={historyData.year2020[2]} picleft={true}
        />
          <SideBySide 
          data={historyData.year2020[3]} 
        />
      
      </YearSection>


      </>
    }
    </>
  )
}