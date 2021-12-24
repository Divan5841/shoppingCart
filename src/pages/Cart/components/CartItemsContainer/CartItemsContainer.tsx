import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { CartItemsList } from '../CartItemsList/CartItemsList'
import { cartItemsSelector, getCartItems } from '../../../../store/cart'
import { loaderSelector } from '../../../../store/loader/ducks'

export const CartItemsContainer: FC = () => {
  const isGetCartItemsLoading = useSelector(loaderSelector(getCartItems))
  const cartItems = useSelector(cartItemsSelector)

  useEffect(() => {
    getCartItems()
  }, [])

  if (isGetCartItemsLoading) {
    return <div>Loading...</div>
  }

  if (!cartItems.length) {
    return <div>Cart is empty</div>
  }

  return <CartItemsList cartItems={cartItems} />
}
