import { delay } from 'redux-saga'
import { put, takeLatest, all } from 'redux-saga/effects'

export function* setSample() {
  yield delay(1000)
  yield put({ type: 'SET_SAMPLE' })
}

export function* watchSetSample() {
  yield takeLatest('REQUEST_SET_SAMPLE', setSample)
}

export default function* rootSaga() {
  yield all([
    watchSetSample()
  ])
}
