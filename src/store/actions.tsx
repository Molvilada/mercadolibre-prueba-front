import { createAction } from "@reduxjs/toolkit";
import { GetItemsResponse } from "../types/types";

const loadItems = createAction<GetItemsResponse>("LOAD_ITEMS");

export default loadItems;
