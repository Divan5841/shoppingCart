import React, { FC, Suspense } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Cart } from '../../pages/Cart/Cart'
import { Urls } from '../../utils'

const history = createBrowserHistory()

export const AppRouter: FC = () => (
  <Router history={history}>
    <Suspense fallback={null}>
      <Switch>
        <Route path={Urls.Cart} exact>
          <Cart />
        </Route>

        <Route path={Urls.Page404} exact>
          Page 404
        </Route>

        <Redirect to={Urls.Cart} from={Urls.Main} />

        <Redirect to={Urls.Page404} />
      </Switch>
    </Suspense>
  </Router>
)
