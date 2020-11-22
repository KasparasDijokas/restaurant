import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import {withRouter} from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/">
        <h2>dine</h2>
      </NavLink>
      <div>
        <NavLink exact to="/" activeStyle={{borderBottom: "1px solid gray"}}>HOME</NavLink>
        <NavLink to="/menu" activeStyle={{borderBottom: "1px solid gray"}}>MENU</NavLink>
        <NavLink to="/reservations" activeStyle={{borderBottom: "1px solid gray"}}>RESERVATIONS</NavLink>
      </div>
    </nav>
  );
};

export default withRouter(Navigation);
