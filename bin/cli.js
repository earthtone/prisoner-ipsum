#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const { prop } = require('ramda')

const getAllParagraphs = require('../')
const makeHtml = require('../html')
const getRandomTitle = require('../title')
const getJson = require('../json')

const type = prop('o', argv) || prop('output', argv)
var out

if (type && type === 'title') {
  out = getRandomTitle()
} else if (type && type === 'html') {
  console.log(...argv._)
  out = makeHtml(...argv._)
} else if (type && type === 'json') {
  out = getJson(...argv._)
} else {
  out = getAllParagraphs(...argv._)
}

console.log(out)
