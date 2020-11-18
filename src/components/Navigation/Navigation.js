import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/">
        <h2>dine</h2>
      </NavLink>
      <div>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/menu">MENU</NavLink>
        <NavLink to="/reservations">RESERVATIONS</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
