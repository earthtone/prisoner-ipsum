import { replace } from 'ramda'
import pick from './pick'
import titles from '../data/titles.json'

/**
 * @func
 * @param {String[]} - array
 * @return {String} - sentence
 * */

const getRandomTitle = titles => () => replace(/(\\|\[|\])/g, '', pick(titles))

export default getRandomTitle(titles)
