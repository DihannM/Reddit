import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="card">{props.children}</div>
    );
};

export default Card;