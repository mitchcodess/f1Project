import { Card } from "@mui/material"

import './ThreeCard.css'
import ImageTopCard from "../UI/Cards/ImageTopCard"

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


function ThreeCard() {
    return (
        <>
        <p>Race Format</p>
        <div className="race-format-body">
            {items.map((item, i) => <ImageTopCard key={i} title={item.title} description={item.description} src={item.src}/>)}
        </div>
        </>
    )
}

export default ThreeCard
