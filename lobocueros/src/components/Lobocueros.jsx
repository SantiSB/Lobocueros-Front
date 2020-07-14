import React from "react";
import Routes from "./Routes";
import { Provider } from "react-redux";
import '../styles/Lobocueros.css';
import store from "../redux/store";

const Lobocueros = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default Lobocueros;
