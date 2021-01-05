import {call, put, all, takeLatest} from 'redux-saga/effects';

import api from '../../../services/api';
// a sucess que passa as informações a request vai fazer essa chamada
import {addToCartSuccess} from './actions';

// * -> significa um generator ou async
function* addToCart({id}) {
  // yield - é o generator do await, nossa chamada a api.
  const response = yield call(api.get, `/products/${id}`);

  // put dispara uma action
  yield put(addToCartSuccess(response.data));
}
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
