import React from "react";
import { BrowserRouter, Switch, NavLink, Route, withRouter } from "react-router-dom";
import Reservations from "./Pages/Reservations/Reservations";
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/reservations" exact component={Reservations} />
        </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
