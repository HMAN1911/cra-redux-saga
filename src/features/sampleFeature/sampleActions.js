import { createAction } from 'redux-act'

export const toggleState = createAction('sample/TOGGLE_STATE', null, () => ({ yee: true }))
export const setSampleRequest = createAction('sample/SET_SAMPLE_REQUEST')
export const setSampleSuccess = createAction('sample/SET_SAMPLE_SUCCESS')
