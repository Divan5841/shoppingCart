import React, { FC, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { render, RenderOptions } from '@testing-library/react'
import '@testing-library/jest-dom'

import { store } from '../store/rootStore'

const AllTheProviders: FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
