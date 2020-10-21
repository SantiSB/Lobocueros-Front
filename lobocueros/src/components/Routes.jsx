import React, {useEffect} from "react";
import { connect} from "react-redux";
import { setAllData, setProductsData } from "../redux/actionsCreators";
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
        'https://lobocuerosapi.com/'
      )
      .then((response) => {
        props.setAllData(response.data)
        
      })
      .catch((e) => {
      });
    axios
      .get(
        'https://my-json-server.typicode.com/SantiSB/JsonDB/results'
      )
      .then((response) => {
        props.setProductsData(response.data)
        
      })
      .catch((e) => {
      });
  }, [])

  // console.log("qazx", JSON.parse(localStorage.getItem('carrito')))
  

  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/productos" exact component={Productos} />
        <Route path="/productos/:id/" component={ProductDetail} />
        <Route path="/carrito" component={Cart} />
        <Route path="/resumen" component={Resume} />
        <Route path="/compraexitosa" component={SuccessfulPurchase} />
        <Route path="/comprafallida" component={FailedPurchase} />
        <Route path="/sobrenosotros" component={About} />
        <Route path="/contacto" component={Contact} />
      </Switch>
    </Router>
  )
};

const mapStateToProps = (state) => ({
  allData: state.allData,
  productsData: state.productsData,
});
const mapDispatchToProps = {
  setAllData,
  setProductsData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);