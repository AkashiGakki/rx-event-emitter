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
```

## License

[MIT](./LICENSE) License © 2022 [Akashi Sai](https://github.com/akashigakki)
