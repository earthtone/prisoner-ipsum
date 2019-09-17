import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export const title = {
  input: 'src/lib/get-title.js',
  plugins: [json(), resolve({
    mainFields: ['module', 'main']
  }), commonjs()],
  output: [
    { file: 'dist/title.esm.js', format: 'esm', name: 'prisoner-ipsum' },
    { file: 'dist/title.umd.js', format: 'umd', name: 'prisoner-ipsum' },
    { file: 'dist/title.unpkg.js', format: 'iife', name: 'PrisonerIpsum' }
  ]
}

export default {
  input: 'src/index.js',
  plugins: [json(), resolve({
    mainFields: ['module', 'main']
  }), commonjs()],
  output: [
    { file: 'dist/index.esm.js', format: 'esm', name: 'prisoner-ipsum' },
    { file: 'dist/index.umd.js', format: 'umd', name: 'prisoner-ipsum' },
    { file: 'dist/index.unpkg.js', format: 'iife', name: 'PrisonerIpsum' }
  ]
}
