import { Card } from "@mui/material"

import './ThreeCard.css'




function ThreeCard({children}) {
    return (
        <>
        <p>Race Format</p>
        {children}
        </>
    )
}

export default ThreeCard
