import { createAction, createReducer } from 'redux-act'
import { createSelector } from 'reselect'

import { IStore } from '../rootStore'

export const showLoader = createAction<string>('SHOW_LOADER')

export const hideLoader = createAction<string>('HIDE_LOADER')

export interface ILoaderState {
  [key: string]: boolean
}

const defaultState: ILoaderState = {}

export const loaderReducer = createReducer<ILoaderState>({}, defaultState)

loaderReducer.on(showLoader, (state, action) => ({
  ...state,
  [action]: true,
}))

loaderReducer.on(hideLoader, (state, action) => ({
  ...state,
  [action]: false,
}))

export const loaderStateSelector = (state: IStore): IStore['loader'] =>
  state.loader

export const loaderSelector = (type: any) =>
  createSelector(
    loaderStateSelector,
    (loaderState) => loaderState[type] || false,
  )
