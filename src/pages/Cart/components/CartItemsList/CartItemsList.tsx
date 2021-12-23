import React, { FC } from 'react'

import styles from './CartItemsList.module.scss'
import { ICartItem } from '../../../../store/cart'
import { CartItem } from '../CartItem/CartItem'

interface ICartItemsListProps {
  cartItems: ICartItem[]
}

export const CartItemsList: FC<ICartItemsListProps> = ({ cartItems }) => (
  <div className={styles.list}>
    {cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} cartItem={cartItem} />
    ))}
  </div>
)
