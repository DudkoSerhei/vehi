import React from 'react';
import Button from '../../ui-kit/button/button.component';
import Icon from '../../ui-kit/icon/icon.component';
import Selectbox from '../../ui-kit/selectbox/selectbox.component';
import iconInstagram from '../../../resources/svg/icon-instagram.svg';
import iconFacebook from '../../../resources/svg/icon-facebook.svg';
import iconLogoFooter from '../../../resources/svg/icon-logo-footer.svg';
import css from './footer.component.scss';

const Footer = () => (
  <footer className={css.footer}>
    <div className={css.top}>
      <div className={css.left}>
        <div className={css.column}>
          <Button className={css.button}>Get Started</Button>
          <a className={css.link}>Rent vehicle</a>
          <a className={css.link}>List your vehicle</a>
        </div>
        <div className={css.column}>
          <Button className={css.button}>Learn More</Button>
          <a className={css.link}>Traveler FAQ</a>
          <a className={css.link}>Vehicle Owner FAQ</a>
        </div>
      </div>
      <div className={css.right}>
        <a className={css.linkIcon}>
          <Icon name={iconInstagram} className={css.icon} />
        </a>
        <a className={css.linkIcon}>
          <Icon name={iconFacebook} className={css.icon} />
        </a>
      </div>
    </div>
    <div className={css.bottom}>
      <div className={css.left}>
        <Icon name={iconLogoFooter} className={css.iconLogo} />
        <p className={css.text}>© Vehi</p>
        <span className={css.delimetr} />
        <p className={css.text}>2018</p>
      </div>
      <div className={css.right}>
        <Selectbox
          className={css.selectbox}
          title="Languege"
          placeholder="Select language"
          value="ENG"
        />
        <Selectbox
          className={css.selectbox}
          title="Currency"
          placeholder="Select currency"
          value="EUR"
        />
      </div>
    </div>
  </footer>
);

export default Footer;