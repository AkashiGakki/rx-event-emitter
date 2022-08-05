import { describe, expect, it } from 'vitest'
import RxEventEmitter from '../src'

describe('should', () => {
  it('exported', () => {
    let ret = ''
    RxEventEmitter.subscribe('test', (ev: any) => {
      ret = ev.data
    })

    RxEventEmitter.notify('test', { data: 'use subscribe' })
    expect(ret).toEqual('use subscribe')
  })

  it('exported', () => {
    let ret = ''
    RxEventEmitter.on('use', (ev: any) => ret = ev.obj)

    RxEventEmitter.emit('use', { obj: 'test' })
    expect(ret).toEqual('test')
  })
})
