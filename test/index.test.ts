import { describe, expect, it } from 'vitest'
import RxEventEmitter from '../src'
import type { Event } from '../src/types'

describe('should', () => {
  it('exported', () => {
    let ret = ''
    RxEventEmitter.subscribe('test', (ev: Event) => {
      ret = ev.data
    })

    RxEventEmitter.notify('test', { data: 'use subscribe' })
    expect(ret).toEqual('use subscribe')
  })

  it('exported', () => {
    let ret = ''
    RxEventEmitter.on('use', (ev: Event) => ret = ev.obj)

    RxEventEmitter.emit('use', { obj: 'test' })
    expect(ret).toEqual('test')
  })
})
