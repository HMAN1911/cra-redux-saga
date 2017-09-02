import Rx from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax';

import {
  setSampleSuccess,
  setSampleRequest,
  githubUsersRequest,
  githubUsersSuccess,
  toggleState
} from './sampleActions'

export const sampleEpic = action$ =>
  action$.ofType(setSampleRequest.getType())
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo(v => setSampleSuccess)

export const tickerEpic = action$ => {
  const source = Rx.Observable.interval(1000).take(10).map(v => toggleState());
  // return source;
  return source
}

export const fetchEpic = action$ => {
  window.action = action$
  return action$.ofType(githubUsersRequest.getType())
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users`)
        .map(response => githubUsersSuccess(response))
    )
}
