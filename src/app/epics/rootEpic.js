import { combineEpics } from 'redux-observable'

import { sampleEpic, fetchEpic, tickerEpic } from '../../features/sampleFeature/sampleEpics'

export const rootEpic = combineEpics(
  sampleEpic,
  fetchEpic,
  tickerEpic
)

export default rootEpic
