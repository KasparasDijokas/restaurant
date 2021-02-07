import React from 'react';
import classes from './mobileCart.module.css';
import Button from '../Button/Button';
import Fade from 'react-reveal/Fade';

const MobileCart = (props) => {
  const total = props.cartData.reduce((acc, curr) => {
    return acc + curr.price * curr.count;
  }, 0);

  const checkoutHandler = () => {
    props.setModal(true);
  };

  return (
    <>
      <div className={classes.cart_container}>
        <div>
          <h3 className={classes.intro}>
            {props.cartData.length === 0
              ? `Your cart is empty`
              : `Bon appetite!`}
          </h3>
        </div>
        {props.cartData.map((dish, index) => {
          return (
            <Fade left key={index}>
              <ul key={index}>
                <li className={classes.cart_item} key={index}>
                  <div className={classes.cart_info}>
                    <img src={dish.img} alt={dish.alt}></img>
                    <div>
                      <h3>{dish.heading}</h3>
                      <div className={classes.cart_details}>
                        <p>
                          {dish.count !== 0 ? dish.count + ' X' : ''}{' '}
                          {dish.price} $
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
            </Fade>
          );
        })}
        <div className={classes.cart_summary}>
          <h3>Total: {total.toFixed(2)}$</h3>
          <Button onClick={checkoutHandler} class_name="btn_dark">
            Proceed
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileCart;
