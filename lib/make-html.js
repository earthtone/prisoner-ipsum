const { trim, replace, compose, split, filter, reduce, identity } = require('ramda')

/**
 * @func
 * @param {string} text - single string made up of several paragraphs
 * @return {string}
 * */
const makeHtml = compose(
  replace(/\s/g, ''),
  reduce((a, c) => a.concat(`<p>${c}</p>`), ''),
  filter(identity),
  split('\n'),
  trim
)

module.exports = makeHtml
