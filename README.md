# rx-event-emitter

📢 A Node.js event emitter with rxjs.

[![NPM version](https://img.shields.io/npm/v/rx-event-emitter?color=a1b858&label=)](https://www.npmjs.com/package/rx-event-emitter)

## Install

```shell
pnpm install rx-event-emitter
```

## Usage

```ts
import emitter from 'rx-event-emitter'

emitter.subscribe('shiori', () => console.log('shiori'))
emitter.notify('shiori') // shiori

emitter.once('nagi', () => console.log('nagi'))
emitter.notify('nagi') // nagi
emitter.notify('nagi')

emitter.subscribe('asuka', () => console.log('asuka'))
emitter.notify('asuka') // asuka
emitter.off('asuka')
emitter.notify('asuka')

// alias
emitter.on('nao', () => console.log('nao')) // same as subscribe
emitter.emit('nao') // same as notify expected 'nao'
```

## License

[MIT](./LICENSE) License © 2022 [Akashi Sai](https://github.com/akashigakki)
