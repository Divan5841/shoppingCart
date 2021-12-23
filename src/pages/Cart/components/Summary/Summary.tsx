import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import styles from './Summary.module.scss'
import { Button } from '../../../../components/Button/Button'
import { summarySelector } from '../../../../store/cart'

interface ISummaryProps {
  onMadeOrder?: () => void
}

export const Summary: FC<ISummaryProps> = ({ onMadeOrder }) => {
  const summary = useSelector(summarySelector)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Summary</h2>
      <div>
        <span data-testid="summary">{summary}</span> у.е.
      </div>

      <Button
        data-testid="make-order-button"
        text="make order"
        onClick={onMadeOrder}
      />
    </div>
  )
}
