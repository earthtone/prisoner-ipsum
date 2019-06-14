const test = require('ava')
const { includes, lte, length, split } = require('ramda')
const getParagraph = require('../get-paragraph')
const sentences = require('../../data/quotes.json')

test('It returns a string of sentences up to a given maximum', assert => {
  const count = Math.floor(Math.random() * 10)
  const words = split('\n', getParagraph(sentences, count))
  const actual = lte(length(words), (count + 1))

  assert.truthy(actual)
})

test('It returns a string of sentences selected from a given list', assert => {
  const count = Math.floor(Math.random() * 10)
  split('\n', getParagraph(sentences, count)).forEach(sentence => {
    assert.truthy(includes(sentence, sentences))
  })
})
