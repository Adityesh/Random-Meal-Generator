import React from 'react';


const Description = (props) => {
    const {ingredients} = props;
    return(
        <div>
            <ul>
                {ingredients.map((element, index) => {
                    return <p key={index}>{element.ingredient} : {element.measure}</p>
                })}
            </ul>
            
        </div>
        
    )
}


export default Description;