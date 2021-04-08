import React from 'react';

const Weather = ({key,title,main,description}) => {
    return(
        <div>
             <h1>City: {title}</h1>
             <h2>Mainly: {main}</h2>
             <p>weather description: {description}</p>
             
        </div>
    )
}
export default Weather;