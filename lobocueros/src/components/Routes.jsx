import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Productos from "./Pages/Productos";

//Rutas del visor de sismos
const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/productos" exact component={Productos} />
    </Switch>
  </Router>
);

export default Routes;