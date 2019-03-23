const test = require('tape')
const { includes } = require('ramda')
const sentences = require('../../data/quotes.json')
const getRandomSentence = require('../get-random-sentence')

test('It returns a random sentence from a given list', assert => {
  const expected = includes(getRandomSentence(sentences), sentences)
  assert.ok(expected)
  assert.end()
})
