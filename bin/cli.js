#!/usr/bin/env node

const path = require('path')
const getAllParagraphs = require('../lib/getAllParagraphs')
console.log(getAllParagraphs(...process.argv.slice(2)))
