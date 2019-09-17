import test from 'ava'
import { includes, length, gte } from 'ramda'
import randomIndex from '../random-index'

test('It gets a random index from a given array', assert => {
  const array = Array.from(new Array(10)).map((_, i) => i)

  let actual = gte(length(array), randomIndex(array, 'foo'))
  assert.truthy(actual)

  actual = includes(randomIndex(array, 'foo'), array)
  assert.truthy(actual)
})
