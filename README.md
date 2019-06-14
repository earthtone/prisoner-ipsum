# Prison Ipsum

![logo](assets/The-Prisoner-Logo.jpg)

Lorem Ipsum generator for quotes from [The Prisoner](https://en.wikipedia.org/wiki/The_Prisoner)

![badge](https://travis-ci.org/earthtone/prisoner-ipsum.svg?branch=master)

## Installation

```sh
npm install @earthtone/prisoner-ipsum
```

## Basic Usage

As module

```js
import { 
  ipsum as ipsumText, 
  html as ipsumHtml, 
  json as ipsumJson, 
  title as ipsumTitle
} from '@earthtone/prisoner-ipsum'

const div = document.createElement('div')
div.text = ipsumText(2, 250)

const article = document.createElement('article')
article.innerHTML = ipsumHtml(2, 250)

const title = document.createElement('h1')
title.text = ipsumTitle(2, 250)

const data = ipsumJson(2, 250)
```

As CLI

```
prisoner-ipsum <minimum-paragraph-length> [maximum-word-length] [output options]


prisoner-ipsum 3
prisoner-ipsum 3 350
prisoner-ipsum 3 350 --output html 
prisoner-ipsum 3 350 --output json 
```
