#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const { prop } = require('ramda')

const { json } = require('./lib')
const type = prop('o', argv) || prop('output', argv)
var out

if (type && type === 'title') {
  out = json().title
} else if (type && type === 'html') {
  out = json(...argv._).html
} else if (type && type === 'json') {
  out = json(...argv._)
} else {
  out = json(...argv._).text
}

console.log(out)
