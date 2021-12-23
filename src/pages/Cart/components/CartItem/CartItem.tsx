import React, { FC, useCallback } from 'react'

import styles from './CartItem.module.scss'
import { Button } from '../../../../components/Button/Button'
import { MinusIcon, PlusIcon, TrashIcon } from '../../../../components/icons'
import {
  deleteCartItem,
  ICartItem,
  updateCartItem,
} from '../../../../store/cart'

interface ICartItemProps {
  cartItem: ICartItem
}

export const CartItem: FC<ICartItemProps> = ({ cartItem }) => {
  const onChangeQuantity = useCallback(
    (quantity: any) => () => {
      const newQuantity = cartItem.quantity + quantity
      if (newQuantity < 0) return

      updateCartItem({
        id: cartItem.id,
        quantity: newQuantity,
      })
    },
    [cartItem.id, cartItem.quantity],
  )

  const onDeleteCartItem = () => deleteCartItem(cartItem.id)

  return (
    <div className={styles.cart}>
      <div className={styles.name}>{cartItem.name}</div>
      <div>{cartItem.price} у.е.</div>

      <div className={styles.counterBox}>
        <Button
          icon={<MinusIcon />}
          onClick={onChangeQuantity(-1)}
          aria-label={`${cartItem.name} decrease quantity`}
        />
        {cartItem.quantity}
        <Button
          icon={<PlusIcon />}
          onClick={onChangeQuantity(1)}
          aria-label={`${cartItem.name} increase quantity`}
        />
      </div>

      <Button icon={<TrashIcon />} onClick={onDeleteCartItem} />
    </div>
  )
}
