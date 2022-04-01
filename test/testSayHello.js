'use strict'

const test = require('tape')
const { sayHello } = require('../index.js')

test('test sayHello', function (t) {
  let s = sayHello()
  t.equals(s, 'Hello World')

  s = sayHello('', '')
  t.equals(s, 'Hello World')

  s = sayHello('Fred')
  t.equals(s, 'Hello Fred')

  s = sayHello('Tom', 'Goodbye')
  t.equals(s, 'Goodbye Tom')

  t.end()
})
