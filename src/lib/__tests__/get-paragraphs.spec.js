import test from 'ava'
import getParagraphs from '../get-paragraphs.js'
import fixture from './__fixtures__/data.json'

test('returns an array of arrays of specified length from an array source', assert => {
  let paragraphsLn = 3
  let sentencesLn = 5

  let result = getParagraphs('abc', { paragraphsLn, sentencesLn }, fixture)

  assert.truthy(Array.isArray(result))
  assert.is(result.length, paragraphsLn)

  result.forEach(paragraph => {
    assert.is(typeof paragraph, 'string')
    const sentences = paragraph.split(' ')

    assert.is(sentences.length, sentencesLn)
    sentences.forEach(sentence => {
      assert.is(typeof sentence, 'string')
      assert.truthy(fixture.includes(sentence))
    })
  })
})
