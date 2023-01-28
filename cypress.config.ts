import { defineConfig } from 'cypress'
// https://github.com/bahmutov/cypress-split
// @ts-ignore
const cypressSplit = require('cypress-split')

export default defineConfig({
  // https://github.com/LironEr/cypress-mochawesome-reporter
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: false,
    saveAllAttempts: true,
    overwrite: true,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    retries: 1,
    setupNodeEvents(on, config) {
      // @ts-ignore
      require('cypress-mochawesome-reporter/plugin')(on)
      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
    },
  },
})
