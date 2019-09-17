import random from 'seed-random'

/**
 * @func
 * @param {Array} array
 * @return {Number}
 * */

const randomIndex = (array, seed) => Math.floor(random(seed)() * array.length)

export default randomIndex
