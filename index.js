'use strict'

module.exports = {
  sayHello,
}

function sayHello(name, greeting) {
  name = name ||  'World'
  greeting = greeting || 'Hello'
  greeting = `${greeting} ${name}`
  console.log(greeting)
  return greeting
}
