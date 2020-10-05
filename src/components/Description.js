import React from 'react';


const Description = (props) => {
    const { data } = props;
    return (
        <div style={{marginLeft : '20px', textAlign : 'left'}}>
            

            <ul style={{listStyle : 'none'}}>
                <li style={{fontSize : 30, color : 'white', marginBottom : 5, maxWidth : '400px'}}>{data.name}</li>
                <li>Category: <span style={{color : 'white'}}>{data.category ? data.category : 'N/A'}</span></li>
                <li>Area: <span style={{color : 'white'}}>{data.area ? data.area : 'N/A'}</span></li>
                <li>Tags: <span style={{color : 'white'}}>{data.tags ? data.tags : 'N/A'}</span></li>
            </ul>

        </div>

    )
}


export default Description;