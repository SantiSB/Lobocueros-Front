import { createStore } from "redux";

import {
  VISIBLE_MINI_CART,
  VISIBLE_SEARCH_FORM,
  VISIBLE_MENU
} from "./actions";

const initialStore = {
  visibleMiniCart: false,
  visibleSearchForm: false,
  visibleMenu: false,
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
    default:
      return state;
  }
};

export default createStore(rootReducer);
