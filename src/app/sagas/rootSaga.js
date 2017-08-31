import { delay } from 'redux-saga'
import { put, takeLatest, all } from 'redux-saga/effects'

import { watchSetSample } from '../../features/sampleFeature/sampleSagas'

export default function* rootSaga() {
  yield all([
    watchSetSample()
  ])
}
