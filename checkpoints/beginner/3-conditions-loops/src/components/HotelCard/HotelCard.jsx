import React from 'react';
import './HotelCard.css';

function HotelCard(props) {
  const { title, description, imageUrl } = props;
  const alt = `${title} photo`;

  return (
    <div className="hotel-card">
      <div className="hotel-card__side">
        <img src={imageUrl} className="hotel-card__image" alt={alt} />
      </div>
      <div className="hotel-card__inner">
        <div className="hotel-card__title">{ title }</div>
        <div className="hotel-card__description">{ description }</div>
        <button className="hotel-card__button">Show details</button>
      </div>
    </div>
  );
}

export default HotelCard;
