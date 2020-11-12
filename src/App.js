import React from "react";
import { BrowserRouter, Switch, NavLink, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
        </Switch>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
