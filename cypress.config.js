const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss"
  },

  retries: {
    runMode: 1,
    openMode: 0,
    },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: 'cypress/integration/examples/*.js',

      env: {

        url: 'https://btstestv1.com'
      }

     
   
      

  },


});
