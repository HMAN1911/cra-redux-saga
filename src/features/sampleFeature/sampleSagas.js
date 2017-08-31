import { delay } from 'redux-saga'
import { put, call, takeLatest, all } from 'redux-saga/effects'

import { toggleState, setSampleSuccess, setSampleRequest } from './sampleActions'

export function* setSample() {
  yield delay(1000)
  yield put(setSampleSuccess())
}

export function* watchSetSample() {
  yield takeLatest(setSampleRequest, setSample)
}
