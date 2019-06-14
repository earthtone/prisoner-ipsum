import test from 'ava'
import { add, lte, length, compose, split, head } from 'ramda'
import getAllParagraphs from '../get-all-paragraphs'

test('It returns the given number of paragraphs', assert => {
  const limit = Math.floor(Math.random() * 10)
  const count = compose(
    add(-1),
    length,
    split('\n')
  )

  const actual = count(getAllParagraphs(limit))
  const expected = limit
  assert.is(actual, expected)
})

test('It returns paragraphs up to a given word limit', assert => {
  const limit = Math.floor(Math.random() * 100)
  const count = compose(
    lte,
    length,
    split(' '),
    head,
    split('\n')
  )

  const actual = count(getAllParagraphs(1, limit))
  assert.truthy(actual)
})
