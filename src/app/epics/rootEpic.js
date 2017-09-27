import { combineEpics } from 'redux-observable'

import { sampleEpic, fetchEpic, tickerEpic, establishSocketEpic } from '../../features/sampleFeature/sampleEpics'

export const rootEpic = combineEpics(
  sampleEpic,
  fetchEpic,
  // tickerEpic,
  establishSocketEpic
)

export default rootEpic
