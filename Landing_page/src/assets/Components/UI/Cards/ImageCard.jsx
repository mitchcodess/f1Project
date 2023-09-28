
import './ImageCard.css'
function ImageCard({src, country, name, lastName, number}) {
    return (
        <div>
            <div className="image-card-container">
                <img src={src} className='imagecard-img-main' />
                
            </div>
            <div className="image-card-content"> 
                <h2>{name} {lastName}</h2>
                <p>{country}</p>
                <p>{number}</p>
            </div>
        </div>
    )
}

export default ImageCard
