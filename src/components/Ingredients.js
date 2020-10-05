import React from 'react';


const Description = (props) => {
    const {ingredients} = props;
    return(
        <div className='ingredients'>
            <ul>
                {ingredients.map((element, index) => {
                    return <li key={index}>{element.ingredient} : <span>{element.measure}</span></li>
                })}
            </ul>
            
        </div>
        
    )
}


export default Description;