import test from 'ava'
import { getSentences } from '../get-sentences.js'
import fixture from './__fixtures__/data.json'

test('returns an array of specified length from an array source', assert => {
  let ln = 3
  let result = getSentences('seed', ln, fixture)

  assert.truthy(Array.isArray(result))
  assert.is(result.length, ln)

  result.forEach(s => {
    assert.is(typeof s, 'string')
    assert.truthy(fixture.includes(s))
  })
})
