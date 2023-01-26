import { defineConfig } from 'cypress'
// https://github.com/bahmutov/cypress-split
// @ts-ignore
const cypressSplit = require('cypress-split')

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: 'index.html',
    overwrite: true,
    html: true,
    json: false,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
    },
  },
})
