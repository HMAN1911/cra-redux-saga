import React from 'react'
import { connect } from 'react-redux'

import { toggleState, setSampleRequest } from './sampleActions'

const Sample = ({
  sample,
  isFetchingSample,
  toggleState,
  setSampleRequest,
  location,
  lol
}) => {
  if (location.type === 'HOME') {
    return <div>
      <div>
        happy fun time
        <button onClick={lol}>click me</button>
      </div>
      {isFetchingSample && <span>Fetching...</span>}
      <button onClick={() => toggleState(null)}>Toggle Sample State</button>
      <button onClick={() => setSampleRequest(null)}>
        Trigger Request Sample
      </button>
      Hi. Your sample status is {`${sample}`}.
    </div>
  }
  if (location.type === 'BANANA') {
    return <div>
      This is banana.
    </div>
  }
}

const mapState = state => ({
  location: state.location,
  ...state.userId.sample
})

export default connect(mapState, {
  toggleState,
  setSampleRequest,
  lol: () => ({ type: 'PING' })
})(Sample)
