import random from 'seed-random'
import curry from 'ramda/src/curry'

/**
 * @func
 * @param {Array} array
 * @return {Number}
 * */

const randomIndex = curry((seed, array) =>
  Math.floor(random(seed)() * array.length)
)

export default randomIndex
