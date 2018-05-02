import React, { Component } from 'react';
import { CARS_FIXTURES } from '../../../../fixtures/cars.fixtures';
import Header from '../../../header/components/header.component';
import Banner from '../banner/banner.component';
import CarCard from '../car-card/car-card.component';
import Reservation from '../reservation/reservation.component';
import Slider from '../slider/slider.component';
import Footer from '../../../footer/components/footer.component';
import css from './home.component.scss';

class Home extends Component {
  render() {
    return (
      <div className={css.container}>
        <Header />
        <Banner />
        <div className={css.main}>
          <h2 className={css.title}>Top cars in Europe</h2>
          <div className={css.cars}>
            {CARS_FIXTURES.map(car => (
              <CarCard
                className={css.carsCard}
                key={car.id}
                src={car.src}
                brand={car.brand}
                year={car.year}
                trips={car.trips}
                location={car.location}
                cost={car.cost}
              />
            ))}
          </div>
        </div>
        <Reservation />
        <Slider />
        <Footer />
      </div>
    );
  }
}

export default Home;