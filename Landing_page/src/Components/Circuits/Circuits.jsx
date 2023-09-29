import React, { useEffect } from 'react'
import { useState } from 'react'
import LoadingPage from '../UI/Loading/LoadingPage'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CircuitCarouselCard from '../UI/Cards/CircuitCarouselCard';


export default function Circuits() {
    const [loading, setLoading] = useState(true)
    const [circuits, setCircuits] = useState([])


    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    useEffect(function() {
      setLoading(true)
    
      const getCurrentDrivers = async () => {
          const response = await fetch('http://ergast.com/api/f1/2023/circuits.json')
          
          if(response.ok) {
              const data = await response.json()
              console.log(data.MRData.CircuitTable.Circuits)
    
              setTimeout(() => {
                  setLoading(false)
                  }, 1500
                  )
          }
      }

      getCurrentDrivers()

  }, [])
  return (
    <>
    {loading ? <LoadingPage/> : 

<Carousel responsive={responsive}>
 <CircuitCarouselCard> 
 
 </CircuitCarouselCard>
 <CircuitCarouselCard> 

</CircuitCarouselCard>
<CircuitCarouselCard> 

 </CircuitCarouselCard>

</Carousel > 
}
    </>
  )
}
