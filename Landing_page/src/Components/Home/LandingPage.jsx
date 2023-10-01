
import { useEffect, useState, useRef, forwardRef } from "react";
import Navigation from "../Navigation/Navigation";
import "./LandingPage.css";
import VideoHero from "./VideoHero";
import Carousel from "react-material-ui-carousel";
import { Card } from '@mui/material';
import ImageTopCard from '../UI/Cards/ImageTopCard'
import ThreeCard from "./ThreeCard";
import SideBySide from "../UI/Cards/SideBySide";

function LandingPage() {

    const divRef = useRef()

    


    const handleScroll = () => {
            divRef.current?.scrollIntoView({behavior: 'smooth'}, {block: "end"})
    }


   
  return (
    <>
        <VideoHero onScroll={handleScroll}/>
        {/* <Carousel >
            {driverList.map((driver, i) => <Card key={i} driver={driver}  />)}
        </Carousel> */}
        {/* <ThreeCard>
            <div ref={divRef} className="race-format-body">
            {items.map((item, i) => <ImageTopCard key={i} title={item.title} description={item.description} src={item.src}/>)}
         </div>
        </ThreeCard> */}
      
    </>
  );
}

export default LandingPage;
