import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './icon.component.scss';

const Icon = (props) => {
  const { name, className } = props;

  const containerClassName = cn(css.container, className);

  return (
    <svg className={containerClassName}>
      <use xlinkHref={`#${name.id}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.shape({
    id: PropTypes.string,
    viewBox: PropTypes.string,
    content: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default Icon;