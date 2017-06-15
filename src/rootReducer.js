import { combineReducers } from 'redux'

export const sampleReducer = (state = {sample: false}, action) => {
  switch (action.type) {
    case 'SET_SAMPLE':
      return Object.assign({}, state, {sample: true})
    default:
      return state
  }
}

export default combineReducers({
  sample: sampleReducer
})
