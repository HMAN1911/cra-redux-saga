import 'rxjs'

import {
  setSampleSuccess,
  setSampleRequest
} from './sampleActions'

export const sampleEpic = action$ =>
  action$.ofType(setSampleRequest.getType())
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo(setSampleSuccess.raw())
