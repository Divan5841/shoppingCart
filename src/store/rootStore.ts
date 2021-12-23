import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { assignAll } from 'redux-act'

import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'
import { hideLoader, ILoaderState, showLoader } from './loader/ducks'
import { cartActions, ICartState } from './cart'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

assignAll([showLoader, hideLoader, ...cartActions], store)

export interface IStore {
  loader: ILoaderState
  cart: ICartState
}
