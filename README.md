# Prison Ipsum

![logo](assets/The-Prisoner-Logo.jpg)

Lorem Ipsum generator for quotes from [The Prisoner](https://en.wikipedia.org/wiki/The_Prisoner)

![badge](https://travis-ci.org/earthtone/prisoner-ipsum.svg?branch=master)

Version 1.0.0 sees a dramatic reduction in this package's scope. CLI functionality is no longer supported, and the `ipsum` generator outputs "paragraphs" of text as an `Array` of `String`s. This approach was taken to reduce the output package size, and to reduce the complexity of maintaining three different content types (i.e. HTML, raw text, and JSON). Packaging output data inside a JSON object, or outputing it to the console is trivial enough. The consumer now has full flexibility, and responsiblity, for rendering `ipsum` output in whatever way befits the use.

Output of a `title` string is still supported, and functions as previously.

## Installation

```sh
npm install @earthtone/prisoner-ipsum
```


## Basic Usage

```js
import html from 'nanohtml'
import { title, ipsum } from '@earthtone/prisoner-ipsum'

const titleText = title() // "Hammer into Anvil"

const textContent = ipsum()

// Output text as Array
console.log(textContent)

// [
//   "I am not a number. I am a person. Why? Running out of time? All right, say you're a poet and you were composing, and you failed to hear Number Ten's greeting. To you and to me, news is like air. We breathe it deeply. We draw it from far and wide. Go to the Town Hall. The Citizens' Council promises help and advice for everyone. Which is? [The door closes behind Number Six as he leaves] Oh? Smile Rat.",
//   "Why? Running out of time? To you and to me, news is like air. We breathe it deeply. We draw it from far and wide. Which is? Oh? Rat. A star. You must be anvil or hammer. [about Number Six] Interesting fellow. Well done. I have several. No. Nor of being reduced.",
//   "All right, say you're a poet and you were composing, and you failed to hear Number Ten's greeting. Which is? Smile A star. And before I hand it over to my successor... Well done. I have several. Naturally. Humor is the very essence of a democratic society. [about Number Six] That one wouldn't drop his guard with his own grandmother! Yes, sir. I'm on my side."
// ]
//

// Output text as HTML Element
const component = () =>
  html`<article>
    <h1>${titleText}</h1>
    ${
      textContent.map(str =>
        html`<p>${str}</p>`
    )}
  </article>`


document.body.querySelector('#app').appendChild(component)
```
