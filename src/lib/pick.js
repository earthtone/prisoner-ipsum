import randomIndex from './random-index'
import curry from 'ramda/src/curry'

/**
 * Return random index value from an array
 * @func
 * @param {array} list
 * @return {*}
 * */

const pick = curry((seed, array) =>
  array[randomIndex(seed, array)]
)

export default pick
