import type { Subscription } from 'rxjs'
import { Subject } from 'rxjs'

const subject: Subject<any> = new Subject()

export function subscribe(type: string, callback: Function): Subscription {
  const subscription: Subscription = subject.subscribe({
    next: (event: any) => {
      if (event.type === type)
        callback(event)
    },
  })
  return subscription
}

export function notify(type: string, param?: string | number | {}) {
  subject.next({ type, param })
}

// alias subscribe
export function on(type: string, callback: Function): Subscription {
  return subscribe(type, callback)
}

// alias notify
export function emit(type: string, param?: string | number | {}) {
  notify(type, param)
}
