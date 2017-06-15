import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
  return {
    ...createStore(
      rootReducer,
      enhancer,
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  }
}

export default configureStore
