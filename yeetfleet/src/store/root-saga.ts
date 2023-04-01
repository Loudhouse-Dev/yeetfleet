import { all, call } from 'typed-redux-saga/macro';

import { productsSaga } from './productStore/product.saga';
import { userSagas } from './userStore/user.saga';

//Generator function
export function* rootSaga() {
  yield* all([call(productsSaga), call(userSagas)]);
}
