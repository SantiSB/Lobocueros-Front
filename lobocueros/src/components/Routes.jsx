import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Productos from "./Pages/Productos";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import Resume from "./Pages/Resume";
//Rutas del visor de sismos
const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/productos" exact component={Productos} />
      <Route path="/productos/:id/" component={ProductDetail} />
      <Route path="/carrito" component={Cart} />
      <Route path="/resumen" component={Resume} />
    </Switch>
  </Router>
);

export default Routes;