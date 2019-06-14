import { compose, replace } from 'ramda'
import pick from './pick'

/**
 * @func
 * @param {String[]} - array
 * @return {String} - sentence
 * */

const getRandomSentence = compose(
  replace(/(\\|\[|\])/g, ''),
  pick
)

export default getRandomSentence
