import { createStore } from "redux";

import {
  VISIBLE_MINI_CART,
  VISIBLE_SEARCH_FORM,
  VISIBLE_MENU,
  ALL_DATA,
  PRODUCTS_DATA,
  PRODUCTS_DATA_HOME,
  PRINCIPAL_IMAGE_DETAIL,
  MAIN_PICTURE_CARD,
  SET_COUNTER, SET_COLOR,
  SET_ITEMS_IN_CART, 
  SET_LIST_FILTER,
  CHANGE_EMAIL,
  CHANGE_FULL_NAME,
  CHANGE_SHIPPING_ADDRESS,
  CHANGE_SHIPPING_CITY,
  CHANGE_TELEPHONE,
  CHANGE_DOCUMENT,
  SEND_BUY,
  SET_PAGE_ACTUAL

} from "./actions";

const initialStore = {
  visibleMiniCart: false,
  visibleSearchForm: false,
  visibleMenu: false,
  allData: {},
  productsData: [],
  productsDataHome: [],
  principalImageDetail: "",
  mainPictureCard: "",
  counter: "",
  colorSelected: "",
  itemsInCart: "",
  listFilter: [],
  valueEmail: "",
  valueFullName: "",
  valueShippingAddress: "",
  valueShippingCity: "",
  valueTelephone: "",
  valueDocument: "",
  sendBuy: "false",
  pageActual: 1
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
    case PRODUCTS_DATA_HOME:
      return {
        ...state,
        productsDataHome: action.event
      };
    case PRINCIPAL_IMAGE_DETAIL:
      return {
        ...state,
        principalImageDetail: action.event
      };
    case MAIN_PICTURE_CARD:
      return {
        ...state,
        mainPictureCard: action.event
      };
    case SET_COUNTER:
      return {
        ...state,
        counter: action.event
      };
    case SET_COLOR:
      return {
        ...state,
        colorSelected: action.event
      };
    case SET_ITEMS_IN_CART:
      return {
        ...state,
        itemsInCart: action.event
      };
    case SET_LIST_FILTER:
      return {
        ...state,
        listFilter: action.event
      };
    case CHANGE_DOCUMENT:
      return {
        ...state,
        valueDocument: action.event
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        valueEmail: action.event
      };
    case CHANGE_FULL_NAME:
      return {
        ...state,
        valueFullName: action.event
      };
    case CHANGE_SHIPPING_ADDRESS:
      return {
        ...state,
        valueShippingAddress: action.event
      };
    case CHANGE_SHIPPING_CITY:
      return {
        ...state,
        valueShippingCity: action.event
      };
    case CHANGE_TELEPHONE:
      return {
        ...state,
        valueTelephone: action.event
      };
    case SEND_BUY:
      return {
        ...state,
        sendBuy: action.event
      };
    case SET_PAGE_ACTUAL:
      return {
        ...state,
        pageActual: action.event
      };
    default:
      return state;
  }
};

export default createStore(rootReducer);
