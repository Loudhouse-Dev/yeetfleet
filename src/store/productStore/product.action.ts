import { PRODUCTS_ACTION_TYPES, ProductData } from './product.types';

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../lib/utils/reducers/reducer.utils';

export type FetchProductsStart =
  Action<PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START>;

export type FetchProductsSucess = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
  ProductData[]
>;

export type FetchProductsFailed = ActionWithPayload<
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED,
  Error
>;

export const fetchProductsStart = withMatcher(
  (): FetchProductsStart =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START)
);

export const fetchProductsSuccess = withMatcher(
  (productsArray: ProductData[]): FetchProductsSucess =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, productsArray)
);

export const fetchProductsFailed = withMatcher(
  (error: Error): FetchProductsFailed =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error)
);
