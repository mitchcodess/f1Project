import './ImageTopCard.css'


function ImageTopCard({title, description, src}) {
    return (
        <>
        <div className='imgtop-card-container'>
         
            <div className="text-box">
                   <h1>{title}</h1> 
                   <p>{description}</p>
             </div>
           
            <div className='image-box'>
                <img src={src} alt={`${title}`} />
            </div>
        </div>
        </>
    )
}

export default ImageTopCard
