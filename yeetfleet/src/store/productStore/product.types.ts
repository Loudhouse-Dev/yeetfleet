export enum PRODUCTS_ACTION_TYPES {
  FETCH_PRODUCTS_START = 'category/FETCH_PRODUCTS_START',
  FETCH_PRODUCTS_SUCCESS = 'category/FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILED = 'category/FETCH_PRODUCTS_FAILED',
}

export type ProductItem = {
  id: number;
  url: string;
  thumb: string;
  cat: string;
  name: string;
  size: string[];
  price: number;
};

export type ProductData = {
  products: ProductItem[];
  title: string;
};

export type ProductMap = {
  [key: string]: ProductItem[];
};
