import emitter from '../src'

console.time('test on')
for (let i = 0; i < 1000; i++)
  emitter.on(`${i}`, () => { })
console.timeEnd('test on')

console.time('test emit')
for (let i = 0; i < 1000; i++)
  emitter.emit(`${i}`)
console.timeEnd('test emit')

console.time('test del')
for (let i = 0; i < 1000; i++)
  emitter.off(`${i}`)
console.timeEnd('test del')
