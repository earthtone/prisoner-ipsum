const path = require('path')
const getAllParagraphs = require(path.resolve('lib', 'getAllParagraphs'))
console.log(getAllParagraphs(...process.argv.slice(2)))
