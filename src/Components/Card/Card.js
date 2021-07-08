import React from 'react';

import './card.css';


function Card(props) {
    console.log(props)


    return (
        <div>
            <p>{props.name}</p>
            <img src={props.url} alt={props.url} />
        </div>
    )
}

export default Card
