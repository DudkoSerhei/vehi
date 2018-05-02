import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './input.component.scss';

class Input extends Component {
  state = {
    isFocused: false,
  };

  render() {
    const { title, placeholder, className, value } = this.props;
    const { isFocused } = this.state;

    const containerClassName = cn(css.container, className, {
      [css.container_isFocused]: isFocused,
    });

    return (
      <div className={containerClassName}>
        <h2 className={css.title}>{title}</h2>
        <input
          className={css.input}
          placeholder={placeholder}
          type="text"
          onChange={this.onInputChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          value={value}
        />
      </div>
    );
  }

  onInputChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  onFocus = () => {
    this.setState({
      isFocused: true,
    });
  }

  onBlur = () => {
    this.setState({
      isFocused: false,
    });
  }
}

Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default Input;