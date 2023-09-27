
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./LandingPage.css";
import VideoHero from "./VideoHero";
import Carousel from "react-material-ui-carousel";
import Card from "../UI/Card";
function LandingPage() {

        const [driverList, setDriverList] = useState([])

    useEffect(function() {
        const getCurrentDrivers = async () => {
            const response = await fetch('http://ergast.com/api/f1/2023/drivers.json')
            
            if(response.ok) {
                const data = await response.json()
                const driverArr = data.MRData.DriverTable.Drivers
                setDriverList(driverArr)
            }

        }

        getCurrentDrivers()

    }, [])


  return (
    <>
        <Navigation />
        <VideoHero />
        {/* <Carousel >
            {driverList.map((driver, i) => <Card key={i} driver={driver}  />)}
        </Carousel> */}
        <MainBody />

    </>
  );
}

export default LandingPage;
