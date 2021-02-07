import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button className={classes[props.class_name]} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
