import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga'

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

  const store =  {
    ...createStore(
      rootReducer,
      enhancer,
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  }

  if(process.env.NODE_ENV !== 'production') {
    if(module.hot) {
      module.hot.accept('../reducers/rootReducer', () =>{
        const newRootReducer = require('../reducers/rootReducer').default
        store.replaceReducer(newRootReducer)
      })
    }
  }
  return store
}

export default configureStore
