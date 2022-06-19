import "./Card.css";
import React from 'react';

const Card = (props) => {
    //through this props.className property we will get the css property of other components also
    const classes = 'card ' + props.className;
    return(
        <div className={classes}>{props.children}</div>)
}

export default Card;