import { IStore } from '../store/rootStore'
import { CART_STATE_MOCK } from './cartMock'

export const STORE_MOCK: IStore = {
  cart: CART_STATE_MOCK,
  loader: {},
}

export const EMPTY_STORE_MOCK: IStore = { loader: {}, cart: {} }
