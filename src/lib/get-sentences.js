import pick from './pick.js'
import curry from 'ramda/src/curry'

export const getSentences = curry((seed, length, sentences) =>
  Array.from({ length })
    .map((_, i) => pick(seed * (i + 1), sentences))
)
