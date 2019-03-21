const randomIndex = require('./random-index')

/**
 * @func
 * @param {String[]} - array
 * @return {String} - sentence
 * */

function getRandomSentence (sentences) {
  return sentences[randomIndex(sentences)].replace(/(\\|\[|\])/g, '')
}

module.exports = getRandomSentence
