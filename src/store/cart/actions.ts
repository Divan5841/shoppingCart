import { createAction } from 'redux-act'

import { ICartItem } from './interfaces'
import { WithRequired } from '../../utils'

export const getCartItems = createAction('GET_CART_ITEMS')

export const putCartItems =
  createAction<Record<string, ICartItem>>('PUT_CART_ITEMS')

export const addCartItem = createAction<ICartItem>('ADD_CART_ITEM')

export const updateCartItem =
  createAction<WithRequired<ICartItem, 'id'>>('UPDATE_CART_ITEM')

export const deleteCartItem = createAction<string>('DELETE_CART_ITEM')

export const cartActions = [
  getCartItems,
  putCartItems,
  addCartItem,
  deleteCartItem,
  updateCartItem,
]
