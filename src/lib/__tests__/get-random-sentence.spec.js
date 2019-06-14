import test from 'ava'
import { includes } from 'ramda'
import sentences from '../../data/quotes.json'
import getRandomSentence from '../get-random-sentence'

test('It returns a random sentence from a given list', assert => {
  let actual = includes(getRandomSentence(sentences), sentences)
  let expected = true
  assert.is(actual, expected)
})
