import Rx from '../src'

Rx.subscribe('test', (ev: any) => {
  console.log('ev: ', ev)
})

Rx.notify('test', { data: 'test' })
