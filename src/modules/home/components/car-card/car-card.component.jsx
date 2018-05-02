import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../../../ui-kit/icon/icon.component';
import iconRating from '../../../../resources/svg/icon-rating.svg';
import iconLocation from '../../../../resources/svg/icon-location.svg';
import css from './car-card.component.scss';

const CarCard = (props) => {
  const { className, src, brand, year, trips, location, cost } = props;
  const containerClassName = cn(css.container, className);

  return (
    <div className={containerClassName}>
      <figure className={css.figure}>
        <img className={css.img} src={src} alt="auto" />
        <figcaption className={css.imgCaption}>{brand}</figcaption>
      </figure>
      <div className={css.description}>
        <div className={css.left}>
          <div className={css.brand}>
            <p className={css.brandTitle}>{brand}</p>
            <span className={css.brandDelimetr} />
            <p className={css.year}>{year}</p>
          </div>
          <div className={css.rating}>
            <Icon name={iconRating} className={css.ratingIcon} />
            <span className={css.ratingDelimetr} />
            <p className={css.ratingTrips}>{`${trips} trips`}</p>
          </div>
          <div className={css.location}>
            <Icon name={iconLocation} className={css.locationIcon} />
            <p className={css.locationText}>{location}</p>
          </div>
        </div>
        <div className={css.right}>
          <div className={css.cost}>
            <p className={css.costCurrency}>€</p>
            <p className={css.costNumber}>{cost}</p>
          </div>
          <p className={css.costDay}>per day</p>
        </div>
      </div>
    </div>
  );
};

CarCard.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  brand: PropTypes.string,
  trips: PropTypes.number,
  location: PropTypes.string,
  cost: PropTypes.number,
  year: PropTypes.number,
};

export default CarCard;