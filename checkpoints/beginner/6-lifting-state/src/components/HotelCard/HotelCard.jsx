import React from 'react';
import Heart from '../../icons/Heart';
import HeartOutline from '../../icons/HeartOutline';
import './HotelCard.css';

function HotelCard(props) {
  const [favorite, setFavorite] = React.useState(false);
  const { title, description, locations, imageUrl, children } = props;
  const alt = `${title} photo`;

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="hotel-card">
      <div className="hotel-card__side">
        <img src={imageUrl} className="hotel-card__image" alt={alt} />
      </div>
      <div className="hotel-card__inner">
        <div className="hotel-card__top">
          <div className="hotel-card__title">{ title }</div>
          <button className="hotel-card__favorite" onClick={handleFavorite}>
            { favorite ? <Heart /> : <HeartOutline /> }
          </button>
        </div>
        {
          locations && (
            <ul className="hotel-card__locations">
              {
                locations.map(location => <li className="hotel-card__location">{ location }</li>)
              }
            </ul>
          )
        }
        <div className="hotel-card__description">{ description }</div>
        { children && <div className="hotel-card__content">{ children }</div> }
        <button className="hotel-card__button">Show details</button>
      </div>
    </div>
  );
}

export default HotelCard;
