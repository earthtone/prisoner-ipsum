import { trim, replace, compose, split, filter, reduce, identity } from 'ramda'

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

export default makeHtml
