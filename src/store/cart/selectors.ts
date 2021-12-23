import { createSelector } from 'reselect'

import { IStore } from '../rootStore'

export const cartStateSelector = (store: IStore): IStore['cart'] => store.cart

export const cartItemsSelector = createSelector(
  cartStateSelector,
  (cartState) => Array.from(cartState.cartItems?.values() || []),
)

export const summarySelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0,
  ),
)
