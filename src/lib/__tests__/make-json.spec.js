import test from 'ava'
import { split, length, filter, identity, compose } from 'ramda'
import makeJson from '../make-json'

const getLength = compose(
  length,
  filter(identity)
)

test('returns object with ipsum text', assert => {
  const { text } = makeJson(3)

  const paragraphs = split('\n', text)
  let actual = getLength(paragraphs)
  let expected = 3
  assert.is(actual, expected)
})

test('returns object with ipsum html', assert => {
  const { html } = makeJson(5)
  let actual = html.match(/(<p>)|(<\/p><p>|(<\/p>))/).length
  let expected = 4
  assert.is(actual, expected)
  assert.snapshot.skip(html)
})

test('returns object with title', assert => {
  const { title } = makeJson(4)
  let actual = typeof title
  let expected = 'string'
  assert.is(actual, expected)
})
