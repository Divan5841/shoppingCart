import React, { FC, FormEvent } from 'react'
import { v1 } from 'uuid'

import styles from './NewCartItemForm.module.scss'
import { Button } from '../../../../components/Button/Button'
import { PlusIcon } from '../../../../components/icons'
import { addCartItem } from '../../../../store/cart'

enum NewCartItemFormField {
  Name = 'name',
  Price = 'price',
}

interface NewCartItemForm {
  [NewCartItemFormField.Name]: string
  [NewCartItemFormField.Price]: number
}

export const NewCartItemForm: FC = () => {
  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = Array.from(
      Object.values(NewCartItemFormField),
    ).reduce<NewCartItemForm>((formData, field) => {
      formData[field] = event.target.children[field].value
      return formData
    }, {} as NewCartItemForm)

    addCartItem({ id: v1(), quantity: 1, ...formData })
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add cart item</h2>

      <form className={styles.formBox} onSubmit={onSubmitForm}>
        <input name={NewCartItemFormField.Name} placeholder="label" required />
        <input
          name={NewCartItemFormField.Price}
          type="number"
          placeholder="price"
          required
        />
        <Button type="submit" text="add" icon={<PlusIcon />} />
      </form>
    </div>
  )
}
