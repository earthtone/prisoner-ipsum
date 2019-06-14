import getParagraph from './get-paragraph'
import sentences from '../data/quotes.json'

/**
 * @func
 * @param {Number} [minParaLength=1] - Minimum number of paragraphs
 * @param {Number} [maxWordLength=250] - Maximim number of words per paragraph
 * */

function getAllParagraphs (minParaLength = 1, maxWordLength = 250) {
  return Array.from(new Array(minParaLength)).reduce((ipsum, current) => {
    ipsum = ipsum + getParagraph(sentences, maxWordLength) + '\n'
    return ipsum
  }, '')
}

export default getAllParagraphs
