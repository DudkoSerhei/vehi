import React from 'react';
import Icon from '../../ui-kit/icon/icon.component';
import Button from '../../ui-kit/button/button.component';
import iconLogo from '../../../resources/svg/icon-logo.svg';
import iconUK from '../../../resources/svg/icon-uk.svg';
import css from './header.component.scss';

const Header = () => (
  <header className={css.header}>
    <Icon name={iconLogo} className={css.logo} />
    <div className={css.profile}>
      <Button className={css.button}>
        List your Vehicle
      </Button>
      <Button className={css.button}>
        Log In
      </Button>
      <Button className={css.button}>
        Register for free
      </Button>
      <Icon name={iconUK} className={css.icon} />
    </div>
  </header>
);

export default Header;