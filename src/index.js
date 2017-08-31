import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app/App'
import configureStore from './app/store/configureStore'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
  registerServiceWorker()
}

if(module.hot) {
  module.hot.accept('./app/App', () => {
    setTimeout(render)
  })
}

render()

