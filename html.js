const getAllParagraphs = require('./lib/get-all-paragraphs')
const makeHtml = require('./lib/make-html')

module.exports = (...args) => makeHtml(getAllParagraphs(...args))
