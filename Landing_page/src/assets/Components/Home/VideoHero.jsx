import bgVideo from '../../media/video/checo.mp4'
import './VideoHero.css'
import {Fade} from '@mui/material'
function VideoHero() {
    return (
        <>
            <div className='main'>
                <div className='overlay'></div>
                <video src={bgVideo} autoPlay muted />
                <div className='content'>
                    <Fade in={true} timeout={1000}><h1>Welcome to Formula 1.</h1></Fade>
                    <Fade in={true} timeout={1000}><p>Everything you need to know about F1</p></Fade>
                </div>
            </div>
        </>
    )
}

export default VideoHero
