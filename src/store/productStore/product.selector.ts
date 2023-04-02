import { createSelector } from 'reselect';

import { RootState } from '../store';
import { ProductsState } from './product.reducer';
import { ProductData, ProductMap } from './product.types';

const selectProductReducer = (state: RootState) => state.products;

export const selectProducts = createSelector(
  [selectProductReducer],
  (productsSlice) => productsSlice.products
);

export const selectProductsMap = createSelector([selectProducts], (products) =>
  products.reduce((acc: ProductMap, product) => {
    const { title, products } = product;
    acc[title.toLowerCase()] = products;
    return acc;
  }, {})
);
