import test from 'ava'
import { includes } from 'ramda'
import titles from '../../data/titles.json'
import getRandomTitle from '../get-random-title'

test('It returns a random episode title', assert => {
  let actual = includes(getRandomTitle(), titles)
  assert.truthy(actual)
})
