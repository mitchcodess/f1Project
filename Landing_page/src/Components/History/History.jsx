import React from 'react'
import { useState , useRef} from 'react'
import LoadingPage from '../UI/Loading/LoadingPage'
import { Drawer } from '@mui/material'
import './History.css'
import Carousel from 'react-multi-carousel';
import SideBySide from '../UI/Cards/SideBySide'
import SideNav from '../UI/Navigation/SideNav'
import { motion, useScroll } from "framer-motion"
import YearSection from './YearSection'
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
        src={'https://www.goodwood.com/globalassets/.road--racing/race/historic/2021/4-april/list-best-f1-cars-1950s/best-f1-cars-of-the-1950s-1-alfa-romeo-158-alfetta-giuseppe-farina-silverstone-1950-mi-goodwood-30042021.jpg?crop=(0,129,2600,1592)&width=1600' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://cdn-3.motorsport.com/images/amp/6xMDDr50/s6/f1-french-gp-1954-juan-manuel-fangio-and-karl-kling-mercedes-benz-w-196-r.jpg' }
        header={'Race Calendar'}
        description={"The 1950 season consisted of seven races held in Europe. These races included iconic circuits like Silverstone in the United Kingdom, Monaco, Spa-Francorchamps in Belgium, Reims in France, Monza in Italy, Bremgarten in Switzerland, and Indianapolis Motor Speedway in the United States. The Indianapolis 500 was included as a points-paying race, unique to that season."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={"Competing Teams" }
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
      </YearSection>
      <YearSection year={'1960s'} ref={year1960Ref}>
        <SideBySide 
        src={'https://www.goodwood.com/globalassets/.road--racing/race/historic/2021/4-april/list-best-f1-cars-1950s/best-f1-cars-of-the-1950s-1-alfa-romeo-158-alfetta-giuseppe-farina-silverstone-1950-mi-goodwood-30042021.jpg?crop=(0,129,2600,1592)&width=1600' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://cdn-3.motorsport.com/images/amp/6xMDDr50/s6/f1-french-gp-1954-juan-manuel-fangio-and-karl-kling-mercedes-benz-w-196-r.jpg' }
        header={'Race Calendar'}
        description={"The 1950 season consisted of seven races held in Europe. These races included iconic circuits like Silverstone in the United Kingdom, Monaco, Spa-Francorchamps in Belgium, Reims in France, Monza in Italy, Bremgarten in Switzerland, and Indianapolis Motor Speedway in the United States. The Indianapolis 500 was included as a points-paying race, unique to that season."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={"Competing Teams" }
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
      </YearSection>
      <YearSection year={'1970s'} ref={year1970Ref}>
        <SideBySide 
        src={'https://www.goodwood.com/globalassets/.road--racing/race/historic/2021/4-april/list-best-f1-cars-1950s/best-f1-cars-of-the-1950s-1-alfa-romeo-158-alfetta-giuseppe-farina-silverstone-1950-mi-goodwood-30042021.jpg?crop=(0,129,2600,1592)&width=1600' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://cdn-3.motorsport.com/images/amp/6xMDDr50/s6/f1-french-gp-1954-juan-manuel-fangio-and-karl-kling-mercedes-benz-w-196-r.jpg' }
        header={'Race Calendar'}
        description={"The 1950 season consisted of seven races held in Europe. These races included iconic circuits like Silverstone in the United Kingdom, Monaco, Spa-Francorchamps in Belgium, Reims in France, Monza in Italy, Bremgarten in Switzerland, and Indianapolis Motor Speedway in the United States. The Indianapolis 500 was included as a points-paying race, unique to that season."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={"Competing Teams" }
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
      </YearSection>
      <YearSection year={'1980s'} ref={year1980Ref}>
        <SideBySide 
        src={'https://www.goodwood.com/globalassets/.road--racing/race/historic/2021/4-april/list-best-f1-cars-1950s/best-f1-cars-of-the-1950s-1-alfa-romeo-158-alfetta-giuseppe-farina-silverstone-1950-mi-goodwood-30042021.jpg?crop=(0,129,2600,1592)&width=1600' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://cdn-3.motorsport.com/images/amp/6xMDDr50/s6/f1-french-gp-1954-juan-manuel-fangio-and-karl-kling-mercedes-benz-w-196-r.jpg' }
        header={'Race Calendar'}
        description={"The 1950 season consisted of seven races held in Europe. These races included iconic circuits like Silverstone in the United Kingdom, Monaco, Spa-Francorchamps in Belgium, Reims in France, Monza in Italy, Bremgarten in Switzerland, and Indianapolis Motor Speedway in the United States. The Indianapolis 500 was included as a points-paying race, unique to that season."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={"Competing Teams" }
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
      </YearSection>
      <YearSection year={'1990s'} ref={year1990Ref}>
        <SideBySide 
        src={'https://www.goodwood.com/globalassets/.road--racing/race/historic/2021/4-april/list-best-f1-cars-1950s/best-f1-cars-of-the-1950s-1-alfa-romeo-158-alfetta-giuseppe-farina-silverstone-1950-mi-goodwood-30042021.jpg?crop=(0,129,2600,1592)&width=1600' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://cdn-3.motorsport.com/images/amp/6xMDDr50/s6/f1-french-gp-1954-juan-manuel-fangio-and-karl-kling-mercedes-benz-w-196-r.jpg' }
        header={'Race Calendar'}
        description={"The 1950 season consisted of seven races held in Europe. These races included iconic circuits like Silverstone in the United Kingdom, Monaco, Spa-Francorchamps in Belgium, Reims in France, Monza in Italy, Bremgarten in Switzerland, and Indianapolis Motor Speedway in the United States. The Indianapolis 500 was included as a points-paying race, unique to that season."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={"Competing Teams" }
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
      </YearSection>
      <YearSection year={'2000s'} ref={year2000Ref}>
        <SideBySide 
        src={'https://www.goodwood.com/globalassets/.road--racing/race/historic/2021/4-april/list-best-f1-cars-1950s/best-f1-cars-of-the-1950s-1-alfa-romeo-158-alfetta-giuseppe-farina-silverstone-1950-mi-goodwood-30042021.jpg?crop=(0,129,2600,1592)&width=1600' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://cdn-3.motorsport.com/images/amp/6xMDDr50/s6/f1-french-gp-1954-juan-manuel-fangio-and-karl-kling-mercedes-benz-w-196-r.jpg' }
        header={'Race Calendar'}
        description={"The 1950 season consisted of seven races held in Europe. These races included iconic circuits like Silverstone in the United Kingdom, Monaco, Spa-Francorchamps in Belgium, Reims in France, Monza in Italy, Bremgarten in Switzerland, and Indianapolis Motor Speedway in the United States. The Indianapolis 500 was included as a points-paying race, unique to that season."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={"Competing Teams" }
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
      </YearSection>
      <YearSection year={'2010s'} ref={year2010Ref}>
        <SideBySide 
        src={'https://www.goodwood.com/globalassets/.road--racing/race/historic/2021/4-april/list-best-f1-cars-1950s/best-f1-cars-of-the-1950s-1-alfa-romeo-158-alfetta-giuseppe-farina-silverstone-1950-mi-goodwood-30042021.jpg?crop=(0,129,2600,1592)&width=1600' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://cdn-3.motorsport.com/images/amp/6xMDDr50/s6/f1-french-gp-1954-juan-manuel-fangio-and-karl-kling-mercedes-benz-w-196-r.jpg' }
        header={'Race Calendar'}
        description={"The 1950 season consisted of seven races held in Europe. These races included iconic circuits like Silverstone in the United Kingdom, Monaco, Spa-Francorchamps in Belgium, Reims in France, Monza in Italy, Bremgarten in Switzerland, and Indianapolis Motor Speedway in the United States. The Indianapolis 500 was included as a points-paying race, unique to that season."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={"Competing Teams" }
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
      </YearSection>
      <YearSection year={'2020s'} ref={year2020Ref}>
        <SideBySide 
        src={'https://www.goodwood.com/globalassets/.road--racing/race/historic/2021/4-april/list-best-f1-cars-1950s/best-f1-cars-of-the-1950s-1-alfa-romeo-158-alfetta-giuseppe-farina-silverstone-1950-mi-goodwood-30042021.jpg?crop=(0,129,2600,1592)&width=1600' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://cdn-3.motorsport.com/images/amp/6xMDDr50/s6/f1-french-gp-1954-juan-manuel-fangio-and-karl-kling-mercedes-benz-w-196-r.jpg' }
        header={'Race Calendar'}
        description={"The 1950 season consisted of seven races held in Europe. These races included iconic circuits like Silverstone in the United Kingdom, Monaco, Spa-Francorchamps in Belgium, Reims in France, Monza in Italy, Bremgarten in Switzerland, and Indianapolis Motor Speedway in the United States. The Indianapolis 500 was included as a points-paying race, unique to that season."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={"Competing Teams" }
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
         <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={'The Birth of F1'}
        description={"The 1950 Formula One season marked the beginning of the modern era of Grand Prix racing. It was the first official World Championship for drivers and teams organized by the Fédération Internationale de l'Automobile (FIA). The championship was established to crown a single world champion in Formula One racing."}
        />
      </YearSection>


      </>
    }
    </>
  )
}