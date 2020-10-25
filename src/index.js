import getParagraphs from './lib/get-paragraphs.js'
import getTitle from './lib/get-title.js'

import sentences from './data/quotes.json'
import titles from './data/titles.json'

export const ipsum = (paragraphsLn = 1, sentencesLn = 5) =>
  getParagraphs(
    Date.now(), // random seed
    { paragraphsLn, sentencesLn }, // options
    sentences // source data
  )

export const title = (seed = 0) => getTitle(
  Date.now() + seed,
  titles
)
