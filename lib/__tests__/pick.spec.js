const test = require('tape')
const { includes } = require('ramda')
const pick = require('../pick')

test('It returns random element from a given array', assert => {
  const array = Array.from(new Array(10)).map((_, i) => (i + 1) * (Math.random() * 100))

  let actual = includes(pick(array), array)
  assert.ok(actual)
  assert.end()
})
