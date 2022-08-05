import type { Subscription } from 'rxjs'
import { Subject } from 'rxjs'

import type { Param } from './types'
import { isObject } from './utils'

const subject: Subject<any> = new Subject()

export function subscribe(type: string, callback: Function): Subscription {
  const subscription: Subscription = subject.subscribe({
    next: (event: any) => {
      if (event._type === type)
        callback(event)
    },
  })
  return subscription
}

export function notify(type: string, param?: Param) {
  if (isObject(param))
    subject.next(Object.assign({ _type: type }, param))
  else
    subject.next({ _type: type, param })
}

// alias subscribe
export function on(type: string, callback: Function): Subscription {
  return subscribe(type, callback)
}

// alias notify
export function emit(type: string, param?: Param) {
  notify(type, param)
}
