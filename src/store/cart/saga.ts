import { call, put, SagaReturnType, takeLatest } from 'redux-saga/effects'

import { hideLoader, showLoader } from '../loader/ducks'
import { putCartItems, getCartItems } from './actions'
import { getCartItemsApi } from './api'

function* getCartItemsSaga(action: ReturnType<typeof getCartItems>) {
  try {
    yield put(showLoader(action.type))

    const cartItems: SagaReturnType<typeof getCartItemsApi> = yield call(
      getCartItemsApi,
    )

    yield put(putCartItems(cartItems.data))
  } catch (e) {
    console.error('getCartItemsSaga', e)
  } finally {
    yield put(hideLoader(action.type))
  }
}

export function* cartWatcher() {
  yield takeLatest(getCartItems, getCartItemsSaga)
}
