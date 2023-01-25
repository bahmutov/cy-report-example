import { defineConfig } from 'cypress'

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
  },
})
