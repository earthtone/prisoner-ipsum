const getParagraph = require('./getParagraph')
const sentences = require('../data/quotes.json')

/**
 * @func
 * @param {Number} [minParaLength=1] - Minimum number of paragraphs
 * @param {Number} [maxWordLength=250] - Maximim number of words per paragraph
 * */

function getAllParagraphs (minParaLength = 1, maxWordLength = 250) {
  return Array(Number(minParaLength)).fill().reduce((ipsum, current, index) => {
    ipsum = `${ipsum} <p>${getParagraph(sentences, maxWordLength)}</p>`
    return ipsum
  }, '')
}

module.exports = getAllParagraphs
