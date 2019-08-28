import React from 'react';
import './HotelCard.css';

function HotelCard() {
  return (
    <div className="hotel-card">
      <div className="hotel-card__side">
        <img src="https://picsum.photos/id/653/300/300" className="hotel-card__image" alt="Hotel Ubud photo" />
      </div>
      <div className="hotel-card__inner">
        <div className="hotel-card__title">Hotel Ubud</div>
        <div className="hotel-card__description">Hotel Ubud offers a peaceful retreat amidst lush tropical gardens, a 3-minute walk from Ubud Palace.</div>
        <button className="hotel-card__button">Show details</button>
      </div>
    </div>
  );
}

export default HotelCard;
