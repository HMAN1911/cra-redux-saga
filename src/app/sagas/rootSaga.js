import { all } from 'redux-saga/effects'

import { watchSetSample } from '../../features/sampleFeature/sampleSagas'

export default function* rootSaga() {
  yield all([
    watchSetSample()
  ])
}
