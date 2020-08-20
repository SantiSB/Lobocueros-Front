import { createStore } from "redux";

import {
  VISIBLE_MINI_CART,
} from "./actions";

const initialStore = {
  visibleMiniCart: false,
};

const rootReducer = (state = initialStore, action) => {
  
  switch (action.type) {
    case VISIBLE_MINI_CART:
      return {
        ...state,
        visibleMiniCart: action.event
      };
    default:
      return state;
  }
};

export default createStore(rootReducer);
