import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '../button/button.component';
import css from './selectbox.component.scss';

class Selectbox extends Component {
  state = {
    isListOpened: false,
  };

  render() {
    const { title, value, className, placeholder } = this.props;
    const { isListOpened } = this.state;

    const containerClassName = cn(css.container, className, {
      [css.container_isOpened]: isListOpened,
    });

    const arrowClassName = cn(css.arrow, {
      [css.arrow_isOpened]: isListOpened,
    });

    return (
      <div className={containerClassName}>
        <h2 className={css.title}>{title}</h2>
        <Button
          className={css.button}
          onClick={this.onButtonClick}
        >
          {value || placeholder}
          <span className={arrowClassName} />
        </Button>
      </div>
    );
  }

  onButtonClick = () => {
    this.setState({
      isListOpened: !this.state.isListOpened,
    });
  }
}

Selectbox.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Selectbox;
