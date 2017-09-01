import { delay } from 'redux-saga'
import { put, takeLatest } from 'redux-saga/effects'

import {
  setSampleSuccess,
  setSampleRequest
} from './sampleActions'

export function* setSample() {
  yield put({ type: 'BANANA', payload: { id: 5 } })
  yield delay(1000)
  yield put(setSampleSuccess())
}

export function* watchSetSample() {
  yield takeLatest(setSampleRequest, setSample)
}
