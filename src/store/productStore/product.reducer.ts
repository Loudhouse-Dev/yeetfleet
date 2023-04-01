import { AnyAction } from 'redux';

import { ProductData } from './product.types';

import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailed,
} from './product.action';

export type ProductsState = {
  readonly products: ProductData[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const PRODUCTS_INITIAL_STATE: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action: AnyAction
): ProductsState => {
  if (fetchProductsStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchProductsSuccess.match(action)) {
    return { ...state, products: action.payload, isLoading: false };
  }

  if (fetchProductsFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
