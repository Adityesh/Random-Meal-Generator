import React, {useState} from 'react';


const Image = (props) => {
    return(
        <img src={props.image} height={300} width={300} alt="Recepie"/>
    )
}


export default Image;