const { replace } = require('ramda')
const pick = require('./pick')
const titles = require('../data/titles.json')

/**
 * @func
 * @param {String[]} - array
 * @return {String} - sentence
 * */

const getRandomTitle = titles => () => replace(/(\\|\[|\])/g, '', pick(titles))

module.exports = getRandomTitle(titles) 
