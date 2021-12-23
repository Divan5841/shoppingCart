import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import styles from './Cart.module.scss'
import { CartItemsList } from './components/CartItemsList/CartItemsList'
import { Summary } from './components/Summary/Summary'
import { NewCartItemForm } from './components/NewCartItemForm/NewCartItemForm'
import { cartItemsSelector, getCartItems } from '../../store/cart'
import { loaderSelector } from '../../store/loader/ducks'

export const Cart: FC = () => {
  const isGetCartItemsLoading = useSelector(loaderSelector(getCartItems))
  const cartItems = useSelector(cartItemsSelector)

  useEffect(() => {
    getCartItems()
  }, [])

  if (isGetCartItemsLoading) {
    return <div>Loading...</div>
  }

  return (
    <main className={styles.container}>
      {cartItems.length ? (
        <CartItemsList cartItems={cartItems} />
      ) : (
        <div>Cart is empty</div>
      )}

      <Summary onMadeOrder={() => {}} />

      <NewCartItemForm />
    </main>
  )
}
