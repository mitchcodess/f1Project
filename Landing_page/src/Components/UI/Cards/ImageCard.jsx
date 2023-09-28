import { Slide } from '@mui/material'
import './ImageCard.css'
function ImageCard({src, country, name, lastName, i}) {
    return (
        <Slide direction={i % 2 ? 'left' : 'right'} in={true} timeout={500}>
        <div className='image-card-container'>
            <div >
                <img src={src} className='imagecard-img-main' />
            </div>
            <div className="image-card-content"> 
                <h2>{name} {lastName}</h2>
                <p>{country}</p>
            </div>
        </div>
        </Slide>
    )
}

export default ImageCard
