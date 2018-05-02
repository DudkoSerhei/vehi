import React, { Component, Fragment } from 'react';
import Icon from '../../../ui-kit/icon/icon.component';
import { Carousel } from 'react-responsive-carousel';
import { COMMENTS_FIXTURES } from '../../../../fixtures/comments.fixtures';
import iconQuotes from '../../../../resources/svg/icon-quotes.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import css from './slider.component.scss';

class Slider extends Component {
  render() {
    const settings = {
      showArrows: false,
      showStatus: false,
      showThumbs: false,
      emulateTouch: true,
    };

    return (
      <div className={css.container}>
        <Icon name={iconQuotes} className={css.icon} />
        <div className={css.slider}>
          <Carousel {...settings}>
            {COMMENTS_FIXTURES && COMMENTS_FIXTURES.map((comment, i) => (
              <Fragment key={i}>
                <p className={css.description}>{comment.description}</p>
                <img
                  className={css.img}
                  key={comment.id}
                  src={comment.src}
                  alt="user"
                />
                <h3 className={css.name}>{comment.name}</h3>
                <p className={css.location}>{comment.location}</p>
              </Fragment>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Slider;