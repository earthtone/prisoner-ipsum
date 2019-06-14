import test from 'ava'
import { includes, length, gte } from 'ramda'
import randomIndex from '../random-index'

test('It gets a random index from a given array', assert => {
  const array = Array.from(new Array(10)).map((_, i) => i)

  let actual = gte(length(array), randomIndex(array))
  assert.truthy(actual)

  actual = includes(randomIndex(array), array)
  assert.truthy(actual)
})
