const getRandomSentence = require('./get-random-sentence')

/**
 * @func
 * @param {String[]} sentences
 * @param {Number} minWordLength - minimum lenght of words per paragraph
 * @return {String}
 * */

function getParagraph (sentences, minWordLength) {
  let paragraph = ''
  let first = true

  while (paragraph.length < minWordLength) {
    if (first) {
      paragraph = getRandomSentence(sentences)
      first = false
    } else {
      paragraph += ` ${getRandomSentence(sentences)}`
    }
  }

  return paragraph
}

module.exports = getParagraph
