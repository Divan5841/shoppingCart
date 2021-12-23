import { combineReducers } from 'redux'

import { loaderReducer } from './loader/ducks'
import { cartReducer } from './cart'

export const rootReducer = combineReducers({
  loader: loaderReducer,
  cart: cartReducer,
})
