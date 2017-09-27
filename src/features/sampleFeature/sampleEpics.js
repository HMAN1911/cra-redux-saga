import Rx from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax';
import io from 'socket.io-client';

import {
  setSampleSuccess,
  setSampleRequest,
  githubUsersRequest,
  githubUsersSuccess,
  startSocketRequest,
  startSocketSuccess,
  toggleState
} from './sampleActions'

const soc = io('http://localhost:3000', {
  autoConnect: false
});

const connect$ = Rx.Observable.create((observer) => {
  soc.open()
  soc.on('connect', (s) => observer.next(s))
  soc.on('connect_error', (s) => observer.error(s))
})

export const establishSocketEpic = action$ => action$.ofType(startSocketRequest.getType()).mergeMap(action => connect$.map(conn => startSocketSuccess(conn)))

export const sampleEpic = action$ =>
  action$.ofType(setSampleRequest.getType())
    .delay(1000)
    .mapTo(v => setSampleSuccess)

export const tickerEpic = action$ => {
  const test$ = Rx.Observable.create((observer) => {
    soc.on('test', (s) => observer.next(s))
  }).map(v => toggleState(v))
  return test$
}

export const fetchEpic = action$ => {
  return action$.ofType(githubUsersRequest.getType())
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users`)
        .map(response => githubUsersSuccess(response))
    )
}
