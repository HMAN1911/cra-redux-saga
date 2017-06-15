import { delay } from 'redux-saga'
import { put, takeLatest, all } from 'redux-saga/effects'

// Our worker Saga: will perform the async increment task
export function* setSample() {
  yield delay(1000)
  yield put({ type: 'SET_SAMPLE' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchSetSample() {
  yield takeLatest('REQUEST_SET_SAMPLE', setSample)
}

export default function* rootSaga() {
  yield all([
    watchSetSample()
  ])
}
