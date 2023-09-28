

import { useState, useEffect } from "react"
import ImageCard from "../UI/Cards/ImageCard"
import './Drivers.css'
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

    return (
        <>
        {loading ? <LoadingPage stroke={'#000000'} strokeWidth={'5'} /> : (
        <div className="driver-grid">
           {driverList.map((driver, i ) => <ImageCard key = {i} src={'https://preview.redd.it/ob0w9atnhrja1.jpg?width=960&crop=smart&auto=webp&s=5bc2815229da683e24c4942e1905b489793ff736'} country={'Belgium'} name={driver.givenName} lastName={driver.familyName} number={33} />)}
        </div>)}
        </>
    )
}

export default Drivers
