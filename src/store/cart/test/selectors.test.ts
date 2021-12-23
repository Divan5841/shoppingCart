import { cartItemsSelector, summarySelector } from '../index'
import { EMPTY_STORE_MOCK, STORE_MOCK } from '../../../mocks/storeMock'
import { CART_ITEMS_ARRAY_MOCK } from '../../../mocks/cartMock'

describe('Cart selectors', () => {
  test('summarySelector should be equal 78', () => {
    expect(summarySelector(STORE_MOCK)).toEqual(78)
  })

  test('summarySelector should return 0', () => {
    expect(summarySelector(EMPTY_STORE_MOCK)).toEqual(0)
  })

  test('cartItemsSelector should return the cartItems array', () => {
    expect(cartItemsSelector(STORE_MOCK)).toEqual(CART_ITEMS_ARRAY_MOCK)
  })

  test('cartItemsSelector should return the empty cartItems array', () => {
    expect(cartItemsSelector(EMPTY_STORE_MOCK)).toEqual([])
  })
})
