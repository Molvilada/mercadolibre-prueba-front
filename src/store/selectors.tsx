import { InitialState, Items, Categories } from "../types/types";

export const selectItems = (state: InitialState): Items => state.items;

export const selectBestCategory = (state: InitialState): Categories =>
  state.bestCategory;

export const selectCategories = (state: InitialState): Categories =>
  state.categories;
