import React from 'react'
import { connect } from 'react-redux'

import { toggleState, setSampleRequest } from './sampleActions'

const Sample = ({ sample, isFetchingSample, toggleState, setSampleRequest }) =>
  <div>
    {
      isFetchingSample && <span>Fetching...</span>
    }
    <button onClick={() => toggleState(null)}>Toggle Sample State</button>
    <button onClick={() => setSampleRequest(null)}>Trigger Request Sample</button>
    Hi. Your sample status is {`${sample}`}.
  </div>

const mapState = (state) => state.sample

export default connect(
  mapState,
  {
    toggleState,
    setSampleRequest
  }
)(Sample)
