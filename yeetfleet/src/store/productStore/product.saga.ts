import { takeLatest, all, call, put } from 'typed-redux-saga/macro';
import { getProductsAndDocuments } from '../../lib/firebase/firebase.config';
import { fetchProductsSuccess, fetchProductsFailed } from './product.action';
import { PRODUCTS_ACTION_TYPES } from './product.types';

export function* fetchProductsAsync() {
  try {
    const productsArray = yield* call(getProductsAndDocuments);
    yield* put(fetchProductsSuccess(productsArray));
  } catch (error) {
    yield* put(fetchProductsFailed(error as Error));
  }
}

export function* onFetchProducts() {
  yield* takeLatest(
    PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START,
    fetchProductsAsync
  );
}

export function* productsSaga() {
  yield* all([call(onFetchProducts)]);
}
