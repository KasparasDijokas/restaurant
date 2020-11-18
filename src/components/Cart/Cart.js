import React, {useState} from "react";
import classes from "./Cart.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Cart = (props) => {
  

  const total = props.cartData.reduce((acc, curr) => {
    return acc + curr.price * curr.count;
  }, 0);

  const checkoutHandler = () => {
    props.setModal(true);
  }

  return (
    <>
    <div className={classes.cart_container}>
      <div>
        <h3 className={classes.intro}>
          {props.cartData.length === 0 ? `Your cart is empty` : `Bon appetite!`}
        </h3>
      </div>
      {props.cartData.map((dish) => {
        return (
          <ul>
            <li className={classes.cart_item} key={dish.alt}>
              <div className={classes.cart_info}>
                <img src={dish.img} alt={dish.alt}></img>
                <div>
                  <h3>{dish.heading}</h3>
                  <div className={classes.cart_details}>
                    <p>
                      {dish.count !== 0 ? dish.count + " X" : ""} {dish.price} $
                    </p>
                    <Button
                      class_name="btn_dark"
                      onClick={() => props.removeDishHandler(dish.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        );
      })}
      <div className={classes.cart_summary}>
        <h3>Total: {total.toFixed(2)}$</h3>
          <Button onClick={checkoutHandler} class_name="btn_dark">Proceed</Button>
      </div>
    </div>
      
      </>
  );
};

export default Cart;
