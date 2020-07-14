import { createStore } from "redux";

import {
  CONSTANTE,
} from "./actions";

const initialStore = {
  estado: [],
};

const rootReducer = (state = initialStore, action) => {
  
  switch (action.type) {
    case CONSTANTE:
      return {
        ...state,
        estado: action.parametro
      };
  }
};

export default createStore(rootReducer);
