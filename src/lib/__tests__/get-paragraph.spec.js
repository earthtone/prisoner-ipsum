import test from 'ava'
import { includes, lte, length, split } from 'ramda'
import getParagraph from '../get-paragraph'
import sentences from '../../data/quotes.json'

test('It returns a string of sentences up to a given maximum', assert => {
  const count = Math.floor(Math.random() * 10)
  const words = split('\n', getParagraph(sentences, count))
  const actual = lte(length(words), (count + 1))

  assert.truthy(actual)
})

test('It returns a string of sentences selected from a given list', assert => {
  const count = Math.floor(Math.random() * 10)
  split('\n', getParagraph(sentences, count)).forEach(function (sentence) {
    let actual = includes(sentence, sentences)
    let expected = true
    assert.is(actual, expected)
  })
})
