import React, { Suspense, lazy } from 'react'
import store from 'stores'
import history from 'utils/history'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import PrivateRoute from 'components/PrivateRoute'
import Loader from 'components/Loader'
import NotFoundComponent from 'components/NotFound'

const HomePage = lazy(() => import('containers/Public/HomePage/index'))

const App = () => {
  return (
    <Provider {...store}>
      <Router history={history}>
        <Suspense fallback={<Loader />}>
          <Switch>
            <PrivateRoute exact path="/private" component={''} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:id" component={NotFoundComponent} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
