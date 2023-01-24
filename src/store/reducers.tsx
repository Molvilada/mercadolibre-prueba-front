import { createReducer } from "@reduxjs/toolkit";
import loadItems from "./actions";

import { InitialState } from "../types/types";

const initialState = {
  categories: [],
  items: [],
  bestCategory: [],
} as InitialState;

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadItems, (state, action) => {
    state.categories = action.payload.categories;
    state.items = action.payload.items;
    state.bestCategory = action.payload.bestCategory;
  });
});

export default rootReducer;
