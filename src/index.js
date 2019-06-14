import getText from './lib/get-all-paragraphs'
import getTitle from './lib/get-random-title'
import makeHtml from './lib/make-html'
import makeJson from './lib/make-json'

export const html = (...args) => makeHtml(getText(...args))
export const json = makeJson
export const ipsum = getText
export const title = getTitle
