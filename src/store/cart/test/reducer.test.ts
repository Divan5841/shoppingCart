import {
  cartReducer,
  deleteCartItem,
  ICartItem,
  putCartItems,
} from '../index'
import {
  CART_ITEMS_MOCK,
  CART_STATE_MOCK,
  EMPTY_CART_STATE_MOCK,
} from '../../../mocks/cartMock'

describe('Cart reducer', () => {
  test('putCartItems should be put cartItems', () => {
    expect(
      cartReducer(EMPTY_CART_STATE_MOCK, putCartItems(CART_ITEMS_MOCK)),
    ).toEqual(CART_STATE_MOCK)
  })

  test('deleteCartItem should be put cartItems', () => {
    const deletedCartItem: ICartItem = CART_ITEMS_MOCK['1233']

    const cartItems = new Map(Object.entries(CART_ITEMS_MOCK))

    cartItems.delete(deletedCartItem.id)

    expect(
      cartReducer(CART_STATE_MOCK, deleteCartItem(deletedCartItem.id)),
    ).toEqual({
      cartItems,
    })
  })
})
