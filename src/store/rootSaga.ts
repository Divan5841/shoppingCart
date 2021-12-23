import { all } from 'redux-saga/effects'

import { cartWatcher } from './cart'

export function* rootSaga() {
  yield all([cartWatcher()])
}
