import test from 'ava'
import { includes } from 'ramda'
import titles from '../data/titles.json'
import { title } from '../index'

test('It returns a random episode title', assert => {
  let actual = includes(title(), titles)
  assert.truthy(actual)
})

test('It returns a random episode title with custom seed', assert => {
  let actual = includes(title(3), titles)
  assert.truthy(actual)
})

test('It returns a different random episode titles if called with different seeds', assert => {
  let title1 = title(33)
  let title2 = title('33')
  assert.not(title1, title2)
})
