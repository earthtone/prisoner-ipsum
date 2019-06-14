import test from 'ava'
import makeHtml from '../make-html'

test('It transforms plain text into HTML', assert => {
  let actual = makeHtml(`foo
    bar
    baz
    bex
    `).toString()

  assert.snapshot(actual)
})
