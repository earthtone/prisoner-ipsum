import replace from 'ramda/src/replace'

import pick from './pick'
// import titles from '../data/titles.json'

/**
 * @func
 * @param {String[]} - array
 * @return {String} - sentence
 * */

const getRandomTitle = (seed, titles) =>
  () =>
    replace(/(\\|\[|\])/g, '', pick(seed, titles))

export default getRandomTitle
