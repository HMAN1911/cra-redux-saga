import { createReducer } from 'redux-act'

import {
  toggleState,
  setSampleRequest,
  setSampleSuccess
} from './sampleActions'

const sampleReducer = createReducer(
  // define supported actions here
  {
    [toggleState]: (state) => Object.assign({}, state, {sample: !state.sample}),
    [setSampleRequest]: (state) => Object.assign({}, state, {isFetchingSample: true}),
    [setSampleSuccess]: (state) => Object.assign({}, state, {isFetchingSample: false, sample: !state.sample})
  },
  // default state defined here
  {
    sample: false,
    isFetchingSample: false
  }
)

export default sampleReducer
