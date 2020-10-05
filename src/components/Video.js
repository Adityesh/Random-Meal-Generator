import React from 'react';

const Video = (props) => {

    return (
        <iframe
            src={props.src}
            width="420" height="315"
            frameBorder='0'
            allowFullScreen
            title="Recepie for video">
        </iframe>
    )


}



export default Video;