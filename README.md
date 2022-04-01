# Hello World for NPM

This is a test package to help learn about creating and
publishing NPM packages.

The package provides a function 'sayHello' which, by default,
prints "Hello World" to the console.

## Install
```bash
npm install @treborg/hello-world-npm
```

## Run Tests
```bash
npm test
```

## Use

```JS
const { sayHello } = require(@treborguk/hello-world-npm);

sayHello();
// Hello World

sayHello('Fred');
// Hello Fred

sayHello('Fred'. 'Hi')
// Hi Fred

```

## License
This code is 100% free and open-source, under the [MIT license](LICENSE).

