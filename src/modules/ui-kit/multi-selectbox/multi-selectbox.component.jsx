import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '../button/button.component';
import css from './multi-selectbox.component.scss';

class MultiSelectbox extends Component {
  render() {
    const { title, firstValue, secondValue, className } = this.props;

    const containerClassName = cn(css.container, className);

    return (
      <div className={containerClassName}>
        <h2 className={css.title}>{title}</h2>
        <div className={css.row}>
          <Button className={css.firstButton}>
            {firstValue}
            <span className={css.firstArrow} />
          </Button>
          <Button className={css.secondButton}>
            {secondValue}
            <span className={css.secondArrow} />
          </Button>
        </div>
      </div>
    );
  }
}

MultiSelectbox.propTypes = {
  title: PropTypes.string,
  firstValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  secondValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default MultiSelectbox;
