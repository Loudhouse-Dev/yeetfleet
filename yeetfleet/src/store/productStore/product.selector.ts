import { createSelector } from 'reselect';

import { RootState } from '../store';
import { ProductsState } from './product.reducer';
import { ProductMap } from './product.types';

const selectProductReducer = (state: RootState): ProductsState =>
  state.products;

export const selectProducts = createSelector(
  [selectProductReducer],
  (productsSlice) => productsSlice.products
);

export const selectProductsMap = createSelector(
  [selectProducts],
  (products): ProductMap =>
    products.reduce((acc, product) => {
      const { title, products } = product;
      acc[title.toLowerCase()] = products;
      return acc;
    }, {} as ProductMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectProductReducer],
  (productsSlice) => productsSlice.isLoading
);
