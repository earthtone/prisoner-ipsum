import pick from './pick.js'
import curry from 'ramda/src/curry'

// getSentences :: Num seed -> Num length -> [ String setence ] -> [ String sentence ]
export const getSentences = curry((seed, length, sentences) =>
  Array.from({ length })
    .map(() => pick(sentences, seed))
)
