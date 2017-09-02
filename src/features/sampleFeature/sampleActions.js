import { createAction } from 'redux-act'

export const toggleState = createAction('sample/TOGGLE_STATE')
export const setSampleRequest = createAction('sample/SET_SAMPLE_REQUEST')
export const setSampleSuccess = createAction('sample/SET_SAMPLE_SUCCESS')
export const githubUsersRequest = createAction('sample/GITHUB_USERS_REQUEST')
export const githubUsersSuccess = createAction('sample/GITHUB_USERS_SUCCESS')
