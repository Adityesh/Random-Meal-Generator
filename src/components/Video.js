import React from 'react';

const Video = (props) => {

    return (
        <div className='video'>
            
            {props.src ? 
            <>
            <h1>Video Recipe</h1>
            <iframe
                src={props.src}
                width="960" height="520"
                frameBorder='0'
                allowFullScreen
                title="Recepie for video">
            </iframe>
            </> : 
            <span>Video not available</span>
            }
            
        </div>

    )


}



export default Video;