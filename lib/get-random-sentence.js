const { compose, replace } = require('ramda')
const pick = require('./pick')

/**
 * @func
 * @param {String[]} - array
 * @return {String} - sentence
 * */

const getRandomSentence = compose(
  replace(/(\\|\[|\])/g, ''),
  pick
)

module.exports = getRandomSentence
