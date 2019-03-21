const identity = x => x

/**
 * @func
 * @param {string} text - single string made up of several paragraphs
 * @return {string}
 * */
function makeHtml (str) {
  return str
    .split('\n')
    .filter(identity)
    .reduce((a, c) => {
      a += `<p>${c}</p>`
      return a
    }, '')
}

module.exports = makeHtml
