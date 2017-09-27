import { createReducer } from 'redux-act'

import {
  toggleState,
  setSampleRequest,
  setSampleSuccess,
} from './sampleActions'

const sampleReducer = createReducer(
  // define supported actions here
  {
    [toggleState]: state => ({ ...state, sample: !state.sample }),
    [setSampleRequest]: state => ({ ...state, isFetchingSample: true }),
    HOME: (state, payload) => {
      return state
    },
    [setSampleSuccess]: state => ({
      ...state,
      isFetchingSample: false,
      sample: !state.sample
    })
  },
  // default state defined here
  {
    sample: false,
    isFetchingSample: false
  }
)

export default sampleReducer
