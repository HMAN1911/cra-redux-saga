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
    [setSampleRequest]: (state) => Object.assign({}, state, {isFetching: true}),
    [setSampleSuccess]: (state) => Object.assign({}, state, {isFetching: false})
  },
  // default state defined here
  {
    sample: false,
    isFetching: false
  }
)

export default sampleReducer
