# v1

---

## Install
````ps1
# optional : --save-dev
npm i mochawesome mochawesome-merge mochawesome-report-generator
````

---

## reporter-config.json
````json
{
  "reporterEnabled": "mochawesome, mocha-junit-reporter",
  "mochaJunitReporterReporterOptions": {
    "mochaFile": "cypress/results/results-[hash].xml"
  },
  "mochawesomeReporterOptions": {
    "reportDir": "cypress/results",
    "overwrite": false,
    "html": false,
    "json": true
  }
}
````

---

## cypress.config.js
````js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1000,
  e2e: {
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
````
