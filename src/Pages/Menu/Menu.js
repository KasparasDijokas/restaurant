import React, { useState } from "react";
import classes from "./Menu.module.css";
import { data } from "../../data";
import Dish from "../../components/Dish/Dish";
import divideImg from "../../assets/images/patterns/pattern-divide.svg";
import Button from "../../components/Button/Button";

const Menu = () => {
  return (
    <section className={classes.menu_container}>
      <div className={classes.menu_items}>
        <ul className={classes.menu_dishes}>
          {Object.keys(data).map((category) => {
            return Object.keys(data[category]).map((item, i) => {
              return (
                <li
                  className={classes.dish_item}
                  key={data[category][item].alt}
                >
                  <img
                    src={data[category][item].img}
                    alt={data[category][item].alt}
                  ></img>
                  <div>
                    <h2>{data[category][item].heading}</h2>
                    <p>{data[category][item].text}</p>
                    <div className={classes.price}>
                      <p>{data[category][item].price} $</p>
                      <Button class_name="btn_dark">Add to cart</Button>
                    </div>
                  </div>
                </li>
              );
            });
          })}
        </ul>
      </div>

      <div className={classes.menu_cart}></div>
    </section>
  );
};

export default Menu;

{
  /* <img src={divideImg} alt="pattern-divide" />
          <h2>A few highlights from our menu</h2>
          <p>
            We cater for all dietary requirements, but here's a glimpse at some
            of our diner's favourites. Our menu is revamped every season.
          </p>
          <Button class_name="btn_dark">ORDER NOW</Button> */
}
