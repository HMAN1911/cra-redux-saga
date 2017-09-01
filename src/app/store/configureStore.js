import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { connectRoutes } from 'redux-first-router'
import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga'

const history = createHistory()

const routesMap = { 
  HOME: '/home',
  BANANA: '/',
}

const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer
} = connectRoutes(history, routesMap)

const finalRootReducer = combineReducers({ location: routerReducer, userId: rootReducer })

// use the devtools compose if its available, otherwise just use compose.
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = applyMiddleware(sagaMiddleware, routerMiddleware)

  const store =  {
    ...createStore(
      finalRootReducer,
      composeEnhancers(
        routerEnhancer,
        middlewares
      ),
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
