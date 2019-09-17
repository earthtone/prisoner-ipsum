import randomIndex from './random-index'

/**
 * Return random index value from an array
 * @func
 * @param {array} list
 * @return {*}
 * */

const pick = (array, seed = Date.now()) => array[randomIndex(array, seed)]
export default pick
