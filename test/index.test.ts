import { describe, expect, it } from 'vitest'
import RxEventEmitter from '../src'

describe('should', () => {
  it('exported', () => {
    let ret = ''
    RxEventEmitter.subscribe('test', (ev: any) => {
      ret = ev.param.data
    })
    RxEventEmitter.notify('test', { data: 'use subscribe' })
    expect(ret).toEqual('use subscribe')
  })
})
