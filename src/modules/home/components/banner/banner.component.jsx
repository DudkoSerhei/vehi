import React, { Component } from 'react';
import Icon from '../../../ui-kit/icon/icon.component';
import Input from '../../../ui-kit/input/input.component';
import Button from '../../../ui-kit/button/button.component';
import Selectbox from '../../../ui-kit/selectbox/selectbox.component';
import MultiSelectbox from '../../../ui-kit/multi-selectbox/multi-selectbox.component';
import iconBanner from '../../../../resources/svg/icon-banner.svg';
import css from './banner.component.scss';

class Banner extends Component {
  state = {
    location: '',
  };

  render() {
    const { location } = this.state;

    return (
      <div className={css.container}>
        <div className={css.top}>
          <div className={css.left}>
            <h1 className={css.title}>The Best Way To Rent a Car</h1>
            <p className={css.description}>
              Choose your favorite car to rent directly from local hosts
            </p>
          </div>
          <Icon name={iconBanner} className={css.banner} />
        </div>
        <div className={css.bottom}>
          <Input
            className={css.input}
            title="Choose Location"
            placeholder="Enter your city, airport or address"
            value={location}
            onChange={this.onInputChange}
          />
          <MultiSelectbox
            className={css.multibox}
            title="From"
            firstValue="05.03.2018"
            secondValue="09:00"
          />
          <MultiSelectbox
            className={css.multibox}
            title="Until"
            firstValue="08.03.2018"
            secondValue="09:00"
          />
          <Selectbox
            className={css.selectbox}
            title="Distance"
            value="400 km"
          />
          <Button className={css.button}>
            Search
          </Button>
        </div>
      </div>
    );
  }

  onInputChange = (location) => {
    this.setState({
      location,
    });
  }
}

export default Banner;