import axios from 'axios'

import { RestResponse, URLS_API } from '../../utils'
import { ICartItem } from './interfaces'

export const getCartItemsApi = (): RestResponse<Record<string, ICartItem>> =>
  axios.get(URLS_API.GET_CART_ITEMS)
