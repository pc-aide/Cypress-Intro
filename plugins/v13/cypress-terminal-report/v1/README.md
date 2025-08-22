# v1

---

## install
````shell
npm i cypress-terminal-report
````

---

## cypress.config.js
````js
const { defineConfig } = require("cypress");
const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configuration du plugin cypress-terminal-report
      installLogsPrinter(on, {
        printLogsToConsole: "always",
        printLogsToFile: "always",
        outputRoot: config.projectRoot + '/',
        outputTarget: {
          'cypress_test.html': 'html',
        },
        // Options pour maximiser les détails et couleurs
        includeSuccessfulHookLogs: true,
        logToFilesOnAfterRun: true,
        outputVerbose: true
      });
      return config;
    },
  }
});
````
