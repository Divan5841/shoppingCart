import React, { FC } from 'react'

import styles from './Cart.module.scss'
import { CartItemsContainer } from './components/CartItemsContainer/CartItemsContainer'
import { Summary } from './components/Summary/Summary'
import { NewCartItemForm } from './components/NewCartItemForm/NewCartItemForm'

export const Cart: FC = () => (
  <main className={styles.container}>
    <NewCartItemForm />

    <Summary onMadeOrder={() => {}} />

    <CartItemsContainer />
  </main>
)
