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
import configureStore from './configureStore'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      {/* Make some components! */}
    </Router>
  </Provider>
)

export default App
