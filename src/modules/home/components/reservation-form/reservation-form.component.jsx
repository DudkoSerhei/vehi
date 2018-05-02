import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Selectbox from '../../../ui-kit/selectbox/selectbox.component';
import Button from '../../../ui-kit/button/button.component';
import css from './reservation-form.component.scss';

const ReservationForm = (props) => {
  const { className } = props;
  const formClassName = cn(css.form, className);

  return (
    <form className={formClassName}>
      <h2 className={css.title}>Find out what you could earn</h2>
      <div className={css.main}>
        <Selectbox
          className={css.selectbox}
          title="Car Location"
          placeholder="Select current city"
          value="Vilnius"
        />
        <Selectbox
          className={css.selectbox}
          title="Mark"
          placeholder="Select mark auto"
          value="Honda"
        />
        <Selectbox
          className={css.selectbox}
          title="Model"
          placeholder="Select madel auto"
          value="Insight"
        />
        <Selectbox
          className={css.selectbox}
          title="Year of First Registration"
          placeholder="Select year auto"
          value="2009"
        />
        <div className={css.price}>
          <span className={css.priceCurrency}>€</span>
          <span className={css.priceCost}>600</span>
          <span className={css.priceDate}>Monthly Rental</span>
        </div>
        <Button className={css.button}>
          Get Started
        </Button>
      </div>
    </form>
  );
};

ReservationForm.propTypes = {
  className: PropTypes.string,
};

export default ReservationForm;