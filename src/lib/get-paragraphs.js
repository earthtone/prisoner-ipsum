import curry from 'ramda/src/curry'
import { getSentences } from './get-sentences'

const getParagraphs = curry((seed, { paragraphsLn, sentencesLn }, sentences) =>
  Array.from({ length: paragraphsLn })
    .map((_, i) =>
      getSentences(seed * (i + 1), sentencesLn, sentences).join(' ')
    )
)

export default getParagraphs
