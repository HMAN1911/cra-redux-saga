import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createEpicMiddleware } from 'redux-observable'
import createHistory from 'history/createBrowserHistory'
import { connectRoutes } from 'redux-first-router'
import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga'

import 'rxjs';

const history = createHistory()

const routesMap = { 
  HOME: '/home',
  BANANA: '/',
}

const PING = 'PING';
const PONG = 'PONG';

const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG });

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
  // const sagaMiddleware = createSagaMiddleware()
  const epicMiddleware = createEpicMiddleware(pingEpic)

  const middlewares = applyMiddleware(epicMiddleware, routerMiddleware)

  const store =  {
    ...createStore(
      finalRootReducer,
      composeEnhancers(
        routerEnhancer,
        middlewares
      ),
    )
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
