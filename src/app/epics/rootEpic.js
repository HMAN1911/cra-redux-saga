import { combineEpics } from 'redux-observable'

import { sampleEpic } from '../../features/sampleFeature/sampleEpics'

export const rootEpic = combineEpics(
  sampleEpic,
)

export default rootEpic
