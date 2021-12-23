import { ICartItem, ICartState } from '../store/cart'

export const CART_ITEMS_MOCK: Record<string, ICartItem> = {
  '1233': { id: '1233', name: 'first item', price: 10, quantity: 1 },
  '1234': { id: '1234', name: 'second item', price: 2, quantity: 0 },
  '1235': { id: '1235', name: 'third item', price: 7, quantity: 4 },
  '1236': { id: '1236', name: 'fourth item', price: 20, quantity: 2 },
}

export const CART_ITEMS_ARRAY_MOCK: ICartItem[] = Array.from(
  new Map(Object.entries(CART_ITEMS_MOCK)).values(),
)

export const CART_STATE_MOCK: ICartState = {
  cartItems: new Map(Object.entries(CART_ITEMS_MOCK)),
}

export const EMPTY_CART_STATE_MOCK: ICartState = {
  cartItems: new Map(),
}
