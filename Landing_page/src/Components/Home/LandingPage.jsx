
import { useEffect, useState, useRef, forwardRef } from "react";
import Navigation from "../Navigation/Navigation";
import "./LandingPage.css";
import VideoHero from "./VideoHero";
import Carousel from "react-material-ui-carousel";
import { Card } from '@mui/material';
import ImageTopCard from '../UI/Cards/ImageTopCard'
import ThreeCard from "./ThreeCard";
import SideBySide from "../UI/Cards/SideBySide";


const items = [

    {
        title: "Free Practice (FP)",
        description: "free practice sessions are held before the qualification and race and are an opportunity for the teams to test and refine their car setup, and for the drivers to get familiar with the track.",
        src: "https://ih1.redbubble.net/image.141531790.3995/st,small,845x845-pad,1000x1000,f8f8f8.u1.jpg"
    },
    {
        title: "Qualifying",
        description: "A qualifying session is held before each race to determine the order cars will be lined up in at the start of the race, with the fastest qualifier starting at the front and the slowest at the back.",
        src: "https://ih1.redbubble.net/image.141531790.3995/st,small,845x845-pad,1000x1000,f8f8f8.u1.jpg"

    },
    {
        title: "Race Day",
        description: "Based on their qualifying positions, drivers line up for the race.",
        src: "https://ih1.redbubble.net/image.141531790.3995/st,small,845x845-pad,1000x1000,f8f8f8.u1.jpg"
    },

]


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
      
        <SideBySide ref={divRef}
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={'What is Formula 1?'}
        description={"Formula 1, often simply referred to as F1, is the epitome of high-speed, precision racing. It brings together the world's most talented drivers, cutting-edge engineering, and state-of-the-art technology on a global stage. With its open-wheel, single-seater racing cars powered by hybrid power units that generate mind-boggling horsepower, Formula 1 showcases the peak of automotive innovation. The championship series features a thrilling calendar of Grands Prix held on diverse tracks, from iconic circuits to challenging street courses. Formula 1 isn't just about speed; it's about strategy, teamwork, and split-second decisions. It has an ardent worldwide fanbase that eagerly follows the drama, excitement, and sheer spectacle that this premier motorsport offers, making each race a captivating spectacle of skill and strategy on the road to the World Drivers' and Constructors' Championships."}
        />
          <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={'What is Formula 1?'}
        description={'Formula 1, often abbreviated as F1, is a prestigious and highly competitive form of motorsport that involves open-wheel, single-seater racing cars. It is considered the pinnacle of motorsport and is known for its cutting-edge technology, high-speed racing, and international appeal. '}
        />
          <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={'What is Formula 1?'}
        description={'Formula 1, often abbreviated as F1, is a prestigious and highly competitive form of motorsport that involves open-wheel, single-seater racing cars. It is considered the pinnacle of motorsport and is known for its cutting-edge technology, high-speed racing, and international appeal. '}
        />
          <SideBySide 
        src={'https://f1i.com/wp-content/uploads/2022/10/F1-starting-grid-silverstone-2022-e1666211486998.jpg' }
        header={'What is Formula 1?'}
        description={'Formula 1, often abbreviated as F1, is a prestigious and highly competitive form of motorsport that involves open-wheel, single-seater racing cars. It is considered the pinnacle of motorsport and is known for its cutting-edge technology, high-speed racing, and international appeal. '}
        />
    </>
  );
}

export default LandingPage;
