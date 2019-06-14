import randomIndex from './random-index'

/**
 * Return random index value from an array
 * @func
 * @param {array} list
 * @return {*}
 * */

const pick = array => array[randomIndex(array)]
export default pick
