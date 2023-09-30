import React, { useEffect } from 'react'
import { useState } from 'react'
import LoadingPage from '../UI/Loading/LoadingPage'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CircuitCarouselCard from '../UI/Cards/CircuitCarouselCard';
import BahrainSVG from '../UI/Loading/bahrain';
import './Circuits.css'


export default function Circuits() {
    const [loading, setLoading] = useState(true)
    const [circuits, setCircuits] = useState([])

    console.log('circuits', circuits)

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
              const circuitArr= data.MRData.CircuitTable.Circuits
              console.log(circuitArr)
              setCircuits(circuitArr)
              setTimeout(() => {
                  setLoading(false)
                  }, 3000
                  )
          }                                                                                                   
      }

      getCurrentDrivers()

  }, [])


const circuitImages = [
  'https://static.thenounproject.com/png/2771762-200.png',
  'https://static.thenounproject.com/png/2771795-200.png',
  'https://static.thenounproject.com/png/2771792-200.png',
  'https://static.thenounproject.com/png/2771789-200.png',
  'https://static.thenounproject.com/png/2771785-200.png',
  'https://static.thenounproject.com/png/2771786-200.png',
  'https://static.thenounproject.com/png/2771779-200.png',
  'https://static.thenounproject.com/png/2771780-200.png',
  'https://static.thenounproject.com/png/2771780-200.png',
  'https://static.thenounproject.com/png/2771786-200.png',
  'https://static.thenounproject.com/png/2771779-200.png',
  'https://static.thenounproject.com/png/2771780-200.png',
  'https://static.thenounproject.com/png/2771780-200.png',
  'https://static.thenounproject.com/png/2771786-200.png',
  'https://static.thenounproject.com/png/2771779-200.png',
  'https://static.thenounproject.com/png/2771780-200.png',
  'https://static.thenounproject.com/png/2771780-200.png',
  'https://static.thenounproject.com/png/2771786-200.png',
  'https://static.thenounproject.com/png/2771779-200.png',
  'https://static.thenounproject.com/png/2771780-200.png',
  'https://static.thenounproject.com/png/2771780-200.png',
  'https://static.thenounproject.com/png/2771786-200.png',
  'https://static.thenounproject.com/png/2771779-200.png',
  'https://static.thenounproject.com/png/2771780-200.png',
  'https://static.thenounproject.com/png/2771780-200.png',
  
]; 

  return (
    <>
    {loading ? <LoadingPage/> : 
 <div className='carousel-container'> 
<Carousel responsive={responsive}>

   {circuits.map((circuit, i) => 
   <CircuitCarouselCard key={i}>
    <img src={`${circuitImages[i]}`}/>
    <p>{circuit.circuitName}</p>
    </CircuitCarouselCard>
    )
  }
</Carousel > 
</div>  
}
    </>
  )
}
