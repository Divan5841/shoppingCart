import { putCartItems } from '../index'
import { CART_ITEMS_MOCK } from '../../../mocks/cartMock'

describe('Cart actions', () => {
  test('putCartItems should not mutate payload', () => {
    expect(putCartItems(CART_ITEMS_MOCK)).toEqual({
      type: 'PUT_CART_ITEMS',
      payload: CART_ITEMS_MOCK,
      error: false,
    })
  })
})
