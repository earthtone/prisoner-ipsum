const test = require('tape')
const assertHtml = require('assert-html')
const makeHtml = require('../make-html')

test('It transforms plain text into HTML', assert => {
  let actual = makeHtml(`foo
    bar
    baz
    bex
    `).toString()
  let expected = `<p>foo</p>
    <p>bar</p>
    <p>baz</p>
    <p>bex</p>
    `.replace(/\s/g, '')

  assertHtml(assert, actual, expected)
  assert.end()
})
