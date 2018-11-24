/**
 * @func
 * @param {Array} array
 * @return {Number}
 * */

function randomIndex (array) {
  return Math.floor(Math.random() * array.length)
}

module.exports = randomIndex
