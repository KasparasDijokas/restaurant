import React, { useState } from 'react';
import classes from './Form.module.css';
import Button from '../../components/Button/Button';

const Form = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });
  const userInputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <section className={classes.form_container}>
      <form>
        <li>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            onChange={userInputHandler}
          ></input>
        </li>
        <li>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={userInputHandler}
          ></input>
        </li>
        <li className={classes.date}>
          <label>Pick a date</label>
          <input
            type="date"
            placeholder=""
            name="date"
            onChange={userInputHandler}
          ></input>
        </li>
        <li className={classes.date}>
          <label>Pick a time</label>
          <input
            type="time"
            placeholder="Name"
            name="time"
            onChange={userInputHandler}
          ></input>
        </li>
        <li>
          <select onChange={userInputHandler} name="guests">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5 Guests</option>
            <option>6 Guests</option>
          </select>
        </li>

        <Button onClick={submitForm} class_name="btn_light">
          MAKE RESERVATION
        </Button>
      </form>
    </section>
  );
};

export default Form;
