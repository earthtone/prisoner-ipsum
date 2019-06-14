import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
export default {
  input: 'src/index.js',
  plugins: [json(), resolve({
    mainFields: ['module', 'main']
  })],
  output: [
    { file: 'dist/index.esm.js', format: 'esm', name: 'prisoner-ipsum' },
    { file: 'dist/index.umd.js', format: 'umd', name: 'prisoner-ipsum' },
    { file: 'dist/index.unpkg.js', format: 'iife', name: 'PrisonerIpsum' },
    { file: 'bin/lib.js', format: 'cjs' }
  ]
}
