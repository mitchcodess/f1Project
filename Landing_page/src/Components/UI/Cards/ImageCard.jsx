import { Slide } from '@mui/material'
import './ImageCard.css'
function ImageCard({src, country, name, lastName, number}) {
    return (
        <Slide direction='up' in={true}>
        <div className='image-card-container'>
            <div >
                <img src={src} className='imagecard-img-main' />
            </div>
            <div className="image-card-content"> 
                <h2>{name} {lastName}</h2>
                <p>{country}</p>
                <p>{number}</p>
            </div>
        </div>
        </Slide>
    )
}

export default ImageCard
