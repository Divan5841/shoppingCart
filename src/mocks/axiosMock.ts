import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { URLS_API } from '../utils'
import { CART_ITEMS_MOCK } from './cartMock'

const mock = new MockAdapter(axios, { delayResponse: 1000 })

mock.onGet(URLS_API.GET_CART_ITEMS).reply(200, CART_ITEMS_MOCK)
