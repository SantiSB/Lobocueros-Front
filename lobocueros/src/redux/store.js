import { createStore } from "redux";

import {
  VISIBLE_MINI_CART,
  VISIBLE_SEARCH_FORM
} from "./actions";

const initialStore = {
  visibleMiniCart: false,
  visibleSearchForm: false,
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
    default:
      return state;
  }
};

export default createStore(rootReducer);
