import React from 'react';
import Icon from '../../../ui-kit/icon/icon.component';
import ReservationForm from '../reservation-form/reservation-form.component';
import iconOvalPurple from '../../../../resources/svg/icon-oval-purple.svg';
import iconOvalTurquoise from '../../../../resources/svg/icon-oval-turquoise.svg';
import iconEdit from '../../../../resources/svg/icon-edit.svg';
import iconHandshake from '../../../../resources/svg/icon-handshake.svg';
import iconRefund from '../../../../resources/svg/icon-refund.svg';
import css from './reservation.component.scss';

const Reservation = () => (
  <div className={css.container}>
    <div className={css.left}>
      <h2 className={css.title}>Let Your Car Work for You</h2>
      <p className={css.description}>
        Listing your car is simple and usually takes about 10 min.
      </p>
      <ul className={css.list}>
        <li className={css.item}>
          <Icon name={iconEdit} className={css.iconEdit} />
          <div className={css.itemColumn}>
            <h3 className={css.itemTitle}>List Your Car</h3>
            <p className={css.itemDescription}>
              It’s free and easy to list your car on Vehi.
              Describe your car, add photos and details.
            </p>
          </div>
        </li>
        <li className={css.item}>
          <Icon name={iconHandshake} className={css.iconHandshake} />
          <div className={css.itemColumn}>
            <h3 className={css.itemTitle}>Welcome Drivers</h3>
            <p className={css.itemDescription}>
              You will greet guests in person with a key.
            </p>
          </div>
        </li>
        <li className={css.item}>
          <Icon name={iconRefund} className={css.iconRefund} />
          <div className={css.itemColumn}>
            <h3 className={css.itemTitle}>Get Paid</h3>
            <p className={css.itemDescription}>
              Vehi’s secure payment system means you never have
              to deal with money directly.
              <span className={css.itemParagraph}>
                You can be paid via PayPal, direct deposit, or
                international money wire, among other ways.
              </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <ReservationForm
      className={css.form}
    />
    <Icon name={iconOvalTurquoise} className={css.turquoise} />
    <Icon name={iconOvalPurple} className={css.purple} />
  </div>
);

export default Reservation;