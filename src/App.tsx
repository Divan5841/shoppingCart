import React, { FC } from 'react'
import { Provider } from 'react-redux'

import { store } from './store/rootStore'
import { ErrorBoundary } from './components/ErrorBoundry/ErrorBoundry'
import { AppRouter } from './components/AppRouter/AppRouter'

export const App: FC = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ErrorBoundary>
)
