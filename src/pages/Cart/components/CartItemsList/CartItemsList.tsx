import React, { FC } from 'react'

import styles from './CartItemsList.module.scss'
import { CartItem } from '../CartItem/CartItem'
import { ICartItem } from '../../../../store/cart'

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
