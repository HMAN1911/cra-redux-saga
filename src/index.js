import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from "react-redux"
import { BrowserRouter as Router } from 'react-router-dom'

import RootRoutes from './app/routes/RootRoutes'
import configureStore from "./app/store/configureStore"

const store = configureStore()

const rootEl = document.getElementById("root")

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <RootRoutes />
      </Router>
    </Provider>,
    rootEl
  )
  registerServiceWorker()
}

if(module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require("redbox-react").default
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl,
    )
  }

  render = () => {
    try {
      renderApp()
    }
    catch(error) {
      console.error(error)
      renderError(error)
    }
  }

  module.hot.accept("./app/routes/RootRoutes", () => {
    setTimeout(render)
  })
}

render()

