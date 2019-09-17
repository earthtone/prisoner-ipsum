import test from 'ava'
import { includes } from 'ramda'
import titles from '../../data/titles.json'
import getTitle from '../get-title'

test('It returns a random episode title', assert => {
  let actual = includes(getTitle('seed', titles)(), titles)
  assert.truthy(actual)
})
