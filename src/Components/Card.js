import React from 'react';
import './Card.css';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt="Card" />
      <div className="card-content">
         <p className="card-description">{description}</p>
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
