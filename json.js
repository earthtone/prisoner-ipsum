const getText = require('./')
const makeHtml = require('./lib/make-html')
const getTitle = require('./lib/get-random-title')

module.exports = (...args) => {
  const text = getText(...args)
  return {
    text,
    html: makeHtml(text),
    title: getTitle()
  }
}
