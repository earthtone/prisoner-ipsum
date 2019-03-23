# Prison Ipsum

![logo](assets/The-Prisoner-Logo.jpg)

Lorem Ipsum generator for quotes from [The Prisoner](https://en.wikipedia.org/wiki/The_Prisoner)

## Installation

```sh
npm install @earthtone/prisoner-ipsum
```

## Basic Usage

As module

```js
const ipsumText = require('@earthtone/prisoner-ipsum')
const ipsumHtml = require('@earthtone/prisoner-ipsum/html')
const ipsumTitle = require('@earthtone/prisoner-ipsum/title')
const ipsumJson = require('@earthtone/prisoner-ipsum/api')

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
