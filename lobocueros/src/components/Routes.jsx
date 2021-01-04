import React, {useEffect} from "react";
import { connect} from "react-redux";
import { setAllData, setProductsData, setProductsDataHome } from "../redux/actionsCreators";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Productos from "./Pages/Productos";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import Resume from "./Pages/Resume";
import SuccessfulPurchase from "./Pages/SuccessfulPurchase";
import FailedPurchase from "./Pages/FailedPurchase";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const Routes = (props) => {
  useEffect(() => {
    axios
      .get(
        props.pageActual == 0
          ? `https://lobocuerosapi.com/products/?limit=0`
          : `https://lobocuerosapi.com/products/?limit=20&offset=${(props.pageActual-1)*20}`
      )
      .then((response) => {
        console.log("qaz1", response)
        props.setAllData(response.data)
        props.setProductsData(response.data.results)
      })
      .catch((e) => {
      });
  }, [props.pageActual])

  useEffect(() => {
    axios
      .get(
          `https://lobocuerosapi.com/products/`
      )
      .then((response) => {
        props.setAllData(response.data.results)
      })
      .catch((e) => {
      });
  }, [props.pageActual])

  useEffect(() => {
    axios
      .get(
        `https://lobocuerosapi.com/products/?limit=15`
      )
      .then((response) => {
        props.setProductsDataHome(response.data.results)
      })
      .catch((e) => {
      });
  })
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/productos" exact component={Productos} />
        <Route path="/productos/:id/" component={ProductDetail} />
        <Route path="/carrito" component={Cart} />
        <Route path="/resumen" component={Resume} />
        <Route path="/resultado-compra" component={SuccessfulPurchase} />
        {/* <Route path="/comprafallida" component={FailedPurchase} /> */}
        <Route path="/sobrenosotros" component={About} />
        <Route path="/contacto" component={Contact} />
      </Switch>
    </Router>
  )
};

const mapStateToProps = (state) => ({
  allData: state.allData,
  productsData: state.productsData,
  pageActual: state.pageActual
});
const mapDispatchToProps = {
  setAllData,
  setProductsData,
  setProductsDataHome,
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);