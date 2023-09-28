

import { useState, useEffect } from "react"
import ImageCard from "../UI/Cards/ImageCard"
import './Drivers.css'
import { Slide } from "@mui/material"
import SvgComponent from "../UI/Loading/bahrain"
import LoadingPage from "../UI/Loading/LoadingPage"

function Drivers() {

    const [driverList, setDriverList] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(function() {
        setLoading(true)
      
        const getCurrentDrivers = async () => {
            const response = await fetch('http://ergast.com/api/f1/2023/drivers.json')
            
            if(response.ok) {
                const data = await response.json()
                const driverArr = data.MRData.DriverTable.Drivers
                setDriverList(driverArr)
                setTimeout(() => {
                    setLoading(false)
                    }, 1500
                    )
            }
        }

        getCurrentDrivers()

    }, [])

    console.log(driverList)
    const driverpics = ['https://preview.redd.it/nqx4seicirja1.png?width=960&crop=smart&auto=webp&s=21eee1e8a149e10cf94da7926a1ba30663ee0256',
    'https://preview.redd.it/bt7spyb7irja1.png?width=960&crop=smart&auto=webp&s=326c39bc66dc664cb43af496eccff0e8577f477a',
    'https://preview.redd.it/elfqw744irja1.png?width=960&crop=smart&auto=webp&s=458b0584605077f5c1fb33103dea9570d4d25023',
    'https://preview.redd.it/asvspl4birja1.png?width=960&crop=smart&auto=webp&s=111f95f9d864f5990efc78d34ff8a832c7765b1d',
    'https://preview.redd.it/3l97zgayhrja1.jpg?width=960&crop=smart&auto=webp&s=3121b6171778a46d41dbd1e82a9b6824ec725bb8',
    'https://preview.redd.it/bxabxb2uhrja1.jpg?width=960&crop=smart&auto=webp&s=44b48ab050d0d87c4653761c6d918ef051bc04e9',
    'https://preview.redd.it/in18yda9irja1.png?width=960&crop=smart&auto=webp&s=473cfb71cdae4f024e1baf016ec494981b2509e4',
    'https://preview.redd.it/asvspl4birja1.png?width=960&crop=smart&auto=webp&s=111f95f9d864f5990efc78d34ff8a832c7765b1d',
    'https://preview.redd.it/zmlw9i8qhrja1.jpg?width=960&crop=smart&auto=webp&s=2140e9436a6f1cc419ea23074efe68a708ccf365',
    'https://preview.redd.it/nequdou8irja1.png?width=960&crop=smart&auto=webp&s=0006eca7a54839aa3d4bf01b26e0c07ef2d3c8f9',
    'https://preview.redd.it/5u49w122irja1.png?width=960&crop=smart&auto=webp&s=e1ba6a4a5bbdf10fb39b10e24be0ef07d1d14e01',
    'https://preview.redd.it/wy7su5xyhrja1.jpg?width=960&crop=smart&auto=webp&s=6786868bd2c87bfb625753da9cfe07bce272fd2d',
    'https://preview.redd.it/s0hnneeohrja1.jpg?width=960&crop=smart&auto=webp&s=ab8db0fd0def97274a5caa3c93fc84389f5494be',
    'https://preview.redd.it/bambv3l2irja1.png?width=960&crop=smart&auto=webp&s=608cd94827c98a396f35ce8ff121da74f68fd7d7', 
    'https://preview.redd.it/bambv3l2irja1.png?width=960&crop=smart&auto=webp&s=608cd94827c98a396f35ce8ff121da74f68fd7d7',
    'https://preview.redd.it/bambv3l2irja1.png?width=960&crop=smart&auto=webp&s=608cd94827c98a396f35ce8ff121da74f68fd7d7',
    'https://preview.redd.it/bambv3l2irja1.png?width=960&crop=smart&auto=webp&s=608cd94827c98a396f35ce8ff121da74f68fd7d7',
    'https://preview.redd.it/bambv3l2irja1.png?width=960&crop=smart&auto=webp&s=608cd94827c98a396f35ce8ff121da74f68fd7d7',
    'https://preview.redd.it/bambv3l2irja1.png?width=960&crop=smart&auto=webp&s=608cd94827c98a396f35ce8ff121da74f68fd7d7',
    'https://preview.redd.it/bambv3l2irja1.png?width=960&crop=smart&auto=webp&s=608cd94827c98a396f35ce8ff121da74f68fd7d7',
                        ]
           


    console.log(driverList)
    return (
        <>
        {loading ? <LoadingPage /> : (
        <div className="driver-grid">
           {driverList.map((driver, i ) => 
            <>
            <ImageCard key = {i} country={driver.nationality} name={driver.givenName} lastName={driver.familyName} number={33} i={i} src={driverpics[i]} /> 
            </>
           )}
        </div>)}
        </>
    )
}

export default Drivers
