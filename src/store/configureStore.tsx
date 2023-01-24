import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { Action, InitialState } from "../types/types";

const initialState = {
  categories: [],
  items: [],
  bestCategory: [],
} as InitialState;

const reducers = (state = initialState, action: Action) => {
  switch (action.type) {
    case "LOAD_ITEMS":
      return {
        ...state,
        categories: [...action.payload.categories],
        items: [...action.payload.items],
        bestCategory: action.payload.bestCategory,
      };
    default:
      return state;
  }
};

export default createStore(reducers, composeWithDevTools());
