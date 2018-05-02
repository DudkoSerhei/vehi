import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './button.component.scss';

const Button = (props) => {
  const { className, children, onClick } = props;

  const containerClassName = cn(css.container, className);

  return (
    <button
      className={containerClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;