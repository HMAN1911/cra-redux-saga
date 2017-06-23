import React from 'react'
import { connect } from 'react-redux'

const Sample = ({ sample, handleSetSample }) =>
  <div>
    <button onClick={handleSetSample}>Toggle Sample State</button>
    Hi. Your sample status is {`${sample}`}.
  </div>

const mapState = (state) => state.sample

export default connect(
  mapState,
  {
    handleSetSample: () => ({type: 'SET_SAMPLE'})
  }
)(Sample)
