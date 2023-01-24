export interface InitialState {
  categories: Categories;
  items: Items;
  bestCategory: Categories;
}

export interface Action {
  type: string;
  payload: GetItemsResponse;
}

export interface Author {
  name: String;
  lastname: String;
}

export interface Category {
  id: string;
  name: string;
  results?: number;
  path_from_root?: Array<{
    id: string;
    name: string;
  }>;
}

export interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  address?: string;
  sold_quantity?: number;
  description?: string;
  category_id?: string;
}

export type Categories = Category[];
export type Items = Item[];

export interface GetItemsResponse {
  author: Author;
  categories: Categories;
  items: Items;
  bestCategory: Categories;
}

export interface GetItemInfoResponse {
  author: Author;
  item: Item;
}
