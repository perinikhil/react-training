import React from 'react';
import PropTypes from 'prop-types';

import './HotelCard.css';

function HotelCard(props) {
  const { title, description, imageUrl } = props;

  return (
    <div className="hotel-card">
      <div className="hotel-card__side">
        <img src={imageUrl} className="hotel-card__image" alt="" />
      </div>
      <div className="hotel-card__inner">
        <div className="hotel-card__title">{ title }</div>
        <div className="hotel-card__description">{ description }</div>
        <button className="hotel-card__button">Show details</button>
      </div>
    </div>
  );
}

HotelCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default HotelCard;
