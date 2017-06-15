import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  withRouter
} from 'react-router-dom'

import { connect, Provider } from 'react-redux'
import { compose } from 'recompose'
import configureStore from './app/store/configureStore'

import RootRoutes from './app/routes/RootRoutes'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <RootRoutes />
    </Router>
  </Provider>
)

export default App
