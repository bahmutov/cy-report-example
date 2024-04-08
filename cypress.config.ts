import { defineConfig } from 'cypress'
// https://github.com/bahmutov/cypress-split
// @ts-ignore
const cypressSplit = require('cypress-split')

export default defineConfig({
  // https://github.com/adamgruber/mochawesome
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    // need JSON reports to merge them later
    json: true,
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
