import React from 'react';
import classes from './Filter.module.css';

const Filter = (props) => {
  return (
    <div className={classes.filter}>
      <h3>Dishes: {props.length}</h3>
      <div className={classes.category}>
        <select onChange={(e) => props.setCategory(e.target.value)}>
          <option value="">Category</option>
          <option value="meat">Meat</option>
          <option value="fish">Fish</option>
          <option value="desserts">Dessert</option>
          <option value="salad">Salad</option>
        </select>
      </div>
      <div className={classes.price}>
        <select onChange={props.sortHandler}>
          <option value="">Price</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
