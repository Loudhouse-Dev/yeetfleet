import { createSlice } from '@reduxjs/toolkit';
import { ProductData } from './product.types';

export type ProductsState = {
  readonly products: ProductData[];
};

export const PRODUCTS_INITIAL_STATE: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: PRODUCTS_INITIAL_STATE,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
