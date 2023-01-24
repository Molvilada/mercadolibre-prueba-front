import { Action, GetItemsResponse } from "../types/types";

export const LOAD_ITEMS = "LOAD_ITEMS";
export const LOAD_ITEM_INFO = "LOAD_ITEM_INFO";

export const loadItems = (payload: GetItemsResponse): Action => ({
  type: LOAD_ITEMS,
  payload,
});
