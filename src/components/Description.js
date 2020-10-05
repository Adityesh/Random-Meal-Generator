import React from 'react';


const Description = (props) => {
    const { data } = props;
    return (
        <div>
            <h1>
                {data.name}
            </h1>

            <ul>
                <li>Category: {data.category}</li>
                <li>Area: {data.area}</li>
                <li>Tags: {data.tags}</li>
            </ul>

        </div>

    )
}


export default Description;