import { defineConfig } from 'cypress'
import { unlinkSync } from 'fs'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    setupNodeEvents(on, config) {
      if (config.video) {
        on('after:spec', (spec, results) => {
          if (results.video) {
            // https://glebbahmutov.com/blog/cypress-test-statuses/
            if (
              results.stats.failures ||
              results.stats.skipped
            ) {
              console.log(
                'keeping the video %s',
                results.video,
              )
            } else {
              console.log('deleting video for passing spec')
              unlinkSync(results.video)
            }
          }
        })
      }
    },
  },
})
