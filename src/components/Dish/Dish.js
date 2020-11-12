import React from "react";
import classes from "./Dish.module.css";

const Dish = (props) => {
  return (
    <div className={props.class_name ? `${classes.dish_menu}` : `${classes.dish_container}`}>
      <img src={props.img} alt={props.alt} />
      <div>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Dish;
