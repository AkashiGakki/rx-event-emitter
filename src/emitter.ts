import type { Subscription } from 'rxjs'
import { Subject } from 'rxjs'

const subject: Subject<any> = new Subject()

export function subscribe(type: string, callback: (ev: any) => void): Subscription {
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

// // on === subscribe
// export function on(type: string, callback: (param: any) => void) {
//   return subject.subscribe({
//     next: (event: any) => {
//       if (event.type === type)
//         callback(event)
//     },
//   })
// }

// // emit === notify
// export function emit(type: string, param?: any) {
//   subject.next({ type, param })
// }
