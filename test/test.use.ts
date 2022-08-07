import Rx from '../src'
import type { Event } from '../src/types'

Rx.subscribe('test', (ev: Event) => {
  console.log('ev: ', ev)
})

Rx.notify('test', { data: 'test' })

// console.log('rx:', Rx)

Rx.once('shiori', (ev: Event) => console.log('shiori: ', ev.data))
Rx.emit('shiori', { data: 'kubo' })
Rx.emit('shiori', { data: 'yama' })
Rx.emit('shiori', { data: 'ume' })

Rx.on('asuka', (ev: Event) => console.log('asuka: ', ev.data))
Rx.off('asuka')
Rx.emit('asuka', { data: 'saito' })
