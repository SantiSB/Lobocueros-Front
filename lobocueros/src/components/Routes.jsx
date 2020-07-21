import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Productos from "./Pages/Productos";
import DetailProduct from "./Pages/DetailProduct";

//Rutas del visor de sismos
const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/productos" exact component={Productos} />
      <Route path="/productos/:id/" component={DetailProduct} />
    </Switch>
  </Router>
);

export default Routes;