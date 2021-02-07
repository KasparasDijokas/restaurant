import React from 'react';
import classes from './MenuSection.module.css';
import { data } from '../../data';
import Dish from '../Dish/Dish';
import divideImg from '../../assets/images/patterns/pattern-divide.svg';
import Button from '../Button/Button';

const MenuSection = () => {
  return (
    <section className={classes.secondary_container}>
      <div className={classes.secondary_info}>
        <img src={divideImg} alt="pattern-divide" />
        <h2>A few highlights from our menu</h2>
        <p>
          We cater for all dietary requirements, but here's a glimpse at some of
          our diner's favourites. Our menu is revamped every season.
        </p>
        <Button class_name="btn_dark">ORDER NOW</Button>
      </div>

      <div className={classes.secondary_dishes}>
        <Dish
          img={data.fish.salmon.img}
          alt={data.fish.salmon.alt}
          heading={data.fish.salmon.heading}
          text={data.fish.salmon.text}
        />
        <Dish
          img={data.meat.mignon.img}
          alt={data.meat.mignon.alt}
          heading={data.meat.mignon.heading}
          text={data.meat.mignon.text}
        />
        <Dish
          img={data.desserts.mousse.img}
          alt={data.desserts.mousse.alt}
          heading={data.desserts.mousse.heading}
          text={data.desserts.mousse.text}
        />
      </div>
    </section>
  );
};

export default MenuSection;
