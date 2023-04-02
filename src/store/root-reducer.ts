import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './userStore/user.reducer';
import { productsReducer } from './productStore/product.reducer';
import { cartReducer } from './cartStore/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});
