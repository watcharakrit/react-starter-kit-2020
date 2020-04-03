import React, { Suspense, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import 'sanitize.css'

import AppProvider from '<State>/AppProvider'

import { routes, LinkWithPreload } from '<Routes>'
import Home from '<Screens>/Home'
import * as serviceWorker from './serviceWorker'

const EmptyState = () => null

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Suspense fallback={<EmptyState />}>
        <Router>
          <LinkWithPreload to="/">Home</LinkWithPreload>
          <LinkWithPreload to="/about">About</LinkWithPreload>

          <Switch>
            {routes.map((route) => (
              <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
            ))}
          </Switch>
        </Router>
      </Suspense>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
