import 'cypress-mochawesome-reporter/register'

Cypress.on('test:after:run', (test, runnable) => {
  if (Cypress.config('video')) {
    // TODO: look up the video folder
    const videoFile = `../videos/${Cypress.spec.name}.mp4`
    // cy.addTestContext(videoFile)
    if (Cypress.Mochawesome) {
      Cypress.Mochawesome.context.push(videoFile)
    }
  }
})

// import addContext from 'mochawesome/addContext'

// const titleToFileName = (title) =>
//   title.replace(/[:\/]/g, '')

// Cypress.on('test:after:run', (test, runnable) => {
//   if (test.state === 'failed') {
//     let parent = runnable.parent
//     let filename = ''
//     while (parent && parent.title) {
//       filename = `${titleToFileName(
//         parent.title,
//       )} -- ${filename}`
//       parent = parent.parent
//     }
//     filename += `${titleToFileName(
//       test.title,
//     )} (failed).png`
//     addContext(
//       { test },
//       `../screenshots/${Cypress.spec.name}/${filename}`,
//     )
//   }
//   addContext({ test }, `../videos/${Cypress.spec.name}.mp4`)
// })
