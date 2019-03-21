#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const getAllParagraphs = require('../lib/get-all-paragraphs')
const makeHtml = require('../lib/make-html')

var out = getAllParagraphs(...argv._)

if (argv.html) {
  out = makeHtml(out)
}

console.log(out)
