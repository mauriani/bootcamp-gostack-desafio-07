import {Alert} from 'react-native';
import {call, select, put, all, takeLatest} from 'redux-saga/effects';

import api from '../../../services/api';
import {formatPrice} from '../../../util/format';
// a sucess que passa as informações a request vai fazer essa chamada
import {addToCartSuccess, updateAmountSuccess} from './actions';

// * -> significa um generator ou async
function* addToCart({id}) {
  // verifica se o produto adicionado no carrinho / para não duplicar
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  // verificando se temos o produto em estoque
  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  // se o productExist não for nulo, isso é o total de produto que tenho no carrinho
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    const amount = productExists.amount + 1;
    yield put(updateAmountSuccess(id, amount));
  } else {
    // yield - é o generator do await, nossa chamada a api.
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    // put dispara uma action
    yield put(addToCartSuccess(data));
  }
}

// função que controla o numero de produtos no carrinho (buttons + e -)
function* updateAmount({id, amount}) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
