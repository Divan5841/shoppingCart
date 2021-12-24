import { createReducer } from 'redux-act'

import { ICartState } from './interfaces'
import {
  addCartItem,
  deleteCartItem,
  putCartItems,
  updateCartItem,
} from './actions'

export const cartReducer = createReducer<ICartState>({}, {})

cartReducer.on(putCartItems, (state, cartItems) => ({
  ...state,
  cartItems: new Map(Object.entries(cartItems)),
}))

cartReducer.on(addCartItem, (state, cartItem) => ({
  ...state,
  cartItems: new Map([
    [cartItem.id, cartItem],
    ...(state.cartItems?.entries() || []),
  ]),
}))

cartReducer.on(updateCartItem, (state, cartItem) => {
  const oldCartItem = state.cartItems?.get(cartItem.id)
  if (!oldCartItem) return state

  const updatedCartItems = state.cartItems?.set(cartItem.id, {
    ...oldCartItem,
    ...cartItem,
  })

  return {
    ...state,
    cartItems: updatedCartItems,
  }
})

cartReducer.on(deleteCartItem, (state, cartItemId) => {
  state.cartItems?.delete(cartItemId)

  return {
    ...state,
    cartItems: state.cartItems,
  }
})
