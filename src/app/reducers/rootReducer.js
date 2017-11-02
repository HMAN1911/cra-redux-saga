import { combineReducers } from 'redux'
import { createForms } from 'react-redux-form'

import sampleReducer from '../../features/sampleFeature/sampleReducer'

export default combineReducers({
  sample: sampleReducer,
  ...createForms({
    sample: {
      one: 1,
      two: 2
    },
  })
})
