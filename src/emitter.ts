import type { Subscription } from 'rxjs'
import { Subject, filter, take } from 'rxjs'

import type { Event, Param } from './types'
import { isObject } from './utils'

const subject: Subject<Object> = new Subject()
export const subscriptions: Map<string, Set<Subscription>> = new Map()

export function subscribe(type: string, callback: Function): Subscription {
  if (!subscriptions.has(type))
    subscriptions.set(type, new Set())

  const subscription: Subscription = subject.subscribe({
    next: (event: Partial<Event>) => {
      if (event._type === type)
        callback(event)
    },
  })
  subscriptions.get(type)?.add(subscription)

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

export function once(type: string, callback: Function): Subscription {
  const subscription: Subscription = subject.pipe(
    filter((ev: any) => ev._type === type),
    take(1),
  ).subscribe({
    next: (event: Partial<Event>) => {
      callback(event)
      subscription.unsubscribe()
    },
  })

  return subscription
}

export function off(type: string): void {
  subscriptions.get(type)?.forEach(sub => sub.unsubscribe())
  subscriptions.delete(type)
}
