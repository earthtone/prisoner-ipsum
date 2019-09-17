import test from 'ava'
import { includes } from 'ramda'
import pick from '../pick'

test('It returns random element from a given array', assert => {
  const array = Array.from(new Array(10)).map((_, i) => (i + 1) * (Math.random() * 100))
  let actual = includes(pick('seed', array), array)
  assert.truthy(actual)
})
