# v13

---

##  cypress.config.js
````js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Folder containing the test specification files
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // Base URL for the application under test
    baseUrl: 'http://localhost:3000',

    // Support file for global configuration and hooks
    supportFile: 'cypress/support/e2e.js',

    // Timeout (milliSeconds) for each Cypress command
    defaultCommandTimeout: 8000,

    // Timeout for network requests
    requestTimeout: 10000,

    // Enable video recording for test runs
    video: true,

    // Automatically take a screenshot on test failure
    screenshotOnRunFailure: true,

    // Disable Chrome Web Security to allow cross-origin requests
    chromeWebSecurity: false,
  },

  // Folder where video recordings will be saved
  videosFolder: 'cypress/videos',

  // Folder where screenshots will be saved
  screenshotsFolder: 'cypress/screenshots',

  // Folder for fixture files (static test data)
  fixturesFolder: 'cypress/fixtures',

  // Default test reporter
  reporter: 'spec',

  // Global default command timeout
  defaultCommandTimeout: 8000,

  // Enable the Cypress Studio feature for recording actions and assertions
  experimentalStudio: true,
});
````

---

## retries
````js
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // defaultCommandTimeout: 10000
    retries: {
      // cypress run : runMode
      runMode: 2,
      // cypress open : openMode
      openMode: 2,
    },
  },
});
````

---

## estIsolation
* cypress.config.js
````js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight : 1000,
  viewportWidth : 1000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // no clear after run-test application - eg storage\LocalStorage
    testIsolation: false
  },
});
````
* demo - add-to-car.cy.js
<img src="https://i.imgur.com/7bM2UUn.png">
