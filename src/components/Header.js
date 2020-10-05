import React from 'react';


const Header = (props) => {
    return(
        <div className='header'>
            <h1 style={{color : "white"}}>Feeling Hungry?</h1>
            <p>Get a random meal by clicking below</p>
            <button onClick={props.click}>GET MEAL</button>
        </div>
    )
}



export default Header;