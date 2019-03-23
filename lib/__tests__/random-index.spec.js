const test = require('tape')
const { includes, length, gte } = require('ramda')
const randomIndex = require('../random-index')

test('It gets a random index from a given array', assert => {
  const array = Array.from(new Array(10)).map((_, i) => i)

  let actual = gte(length(array), randomIndex(array))
  assert.ok(actual)

  actual = includes(randomIndex(array), array)
  assert.ok(actual)

  assert.end()
})
