import { createStore } from "redux";

import {
  VISIBLE_MINI_CART,
  VISIBLE_SEARCH_FORM,
  VISIBLE_MENU,
  ALL_DATA,
  PRODUCTS_DATA,
  PRINCIPAL_IMAGE_DETAIL,
} from "./actions";

const initialStore = {
  visibleMiniCart: false,
  visibleSearchForm: false,
  visibleMenu: false,
  allData: {},
  productsData: [],
  principalImageDetail: ""
};

const rootReducer = (state = initialStore, action) => {
  
  switch (action.type) {
    case VISIBLE_MINI_CART:
      return {
        ...state,
        visibleMiniCart: action.event
      };
    case VISIBLE_SEARCH_FORM:
      return {
        ...state,
        visibleSearchForm: action.event
      };
    case VISIBLE_MENU:
      return {
        ...state,
        visibleMenu: action.event
      };
    case ALL_DATA:
      return {
        ...state,
        allData: action.event
      };
    case PRODUCTS_DATA:
      return {
        ...state,
        productsData: action.event
      };
    case PRINCIPAL_IMAGE_DETAIL:
      return {
        ...state,
        principalImageDetail: action.event
      };
  
    default:
      return state;
  }
};

export default createStore(rootReducer);
