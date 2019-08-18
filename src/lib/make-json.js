import getText from './get-all-paragraphs'
import getTitle from './get-random-title'

/**
 * @typedef {Object} Api
 * @property {string} text
 * @property {string} title
 * */

/**
 * @func
 * @param {Number} [minParaLength=1] - Minimum number of paragraphs
 * @param {Number} [maxWordLength=250] - Maximim number of words per paragraph
 * @return {Api}
 * */
export default (...args) => {
  const text = getText(...args)
  return {
    text,
    title: getTitle()
  }
}
