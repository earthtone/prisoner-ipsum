const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

async function scrape () {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto('https://en.wikiquote.org/wiki/The_Prisoner')
  await page.waitFor(1000)
  const result = await page.evaluate(function () {
    return Array.from(document.querySelectorAll('dd')).map(node => node.textContent.replace(/^(\w|\s)*:\s/, ''))
  })

  browser.close()
  fs.writeFile(path.resolve('data', 'quotes.json'), JSON.stringify(result), err => {
    if (err) throw err
    console.log('🔥')
  })
}

scrape()
