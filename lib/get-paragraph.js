const getRandomSentence = require('./get-random-sentence')

/**
 * @func
 * @param {String[]} sentences
 * @param {Number} maxWordLength - minimum lenght of words per paragraph
 * @return {String}
 * */

function getParagraph (sentences, maxWordLength) {
  let paragraph = ''
  let first = true

  while (paragraph.length < maxWordLength) {
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
