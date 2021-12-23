import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen } from '../../../../utils/test-utils'
import { Summary } from './Summary'
import { cartReducer, putCartItems } from '../../../../store/cart'
import {
  CART_ITEMS_MOCK,
  EMPTY_CART_STATE_MOCK,
} from '../../../../mocks/cartMock'

describe('Summary component', () => {
  beforeEach(() => {
    cartReducer(EMPTY_CART_STATE_MOCK, putCartItems({}))
  })

  test('should render summary equal 78', () => {
    render(<Summary />)
    cartReducer(EMPTY_CART_STATE_MOCK, putCartItems(CART_ITEMS_MOCK))

    expect(screen.getByTestId('summary')).toHaveTextContent('78')
  })

  test('should render summary equal 0', () => {
    render(<Summary />)

    expect(screen.getByTestId('summary')).toHaveTextContent('0')
  })

  test('make order should be clicked', () => {
    const makeOrder = jest.fn(() => {})

    const { getByTestId } = render(<Summary onMadeOrder={makeOrder} />)

    const button = getByTestId('make-order-button')
    userEvent.click(button)

    expect(makeOrder).toBeCalledTimes(1)
  })
})
