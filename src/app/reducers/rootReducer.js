import { combineReducers } from 'redux'
import sampleReducer from '../../features/sampleFeature/sampleReducer'

export default combineReducers({
  sample: sampleReducer
})
