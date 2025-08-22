# plugins

---

## doc
* https://docs.cypress.io/app/plugins/plugins-list
* https://www.npmjs.com/package/concurrently

---

## cypress-split
````shell
# install
npm i cypress-split
````
* support/e2e/js
````js
// Import cypress-terminal-report support
require('cypress-terminal-report/src/installLogsCollector')();
````
* cypress.config.js
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
          'cypress_test.json': 'json',
        },
        // Options pour maximiser les détails dans le JSON
        includeSuccessfulHookLogs: true,
        logToFilesOnAfterRun: true
      });
      return config;
    },
  }
});
````

---

## mocha-junit-reporter
````shell
# install
npm i mocha-junit-reporter --save-dev
````

---

## cypress-log-to-output
```shell
# install
npm i cypress-log-to-output
````

* eg test
````js
it('test login', () => {
  cy.log("Start login process");
  cy.visit("/login");
  cy.get("#username").type("admin");
  cy.log("Entered username");
  cy.get("#password").type("1234");
  cy.log("Entered password");
  cy.get("button[type=submit]").click();
  cy.log("Login test finished");
});
````

* console
````shell
cy:log Start login process
cy:log Entered username
cy:log Entered password
cy:log Login test finished
````

* O/P
````shell
npx cypress run > logs.txt
````

---

## cypress-terminal-report
````shell
# install
npm cypress-terminal-report
````

* cypress.config.js
````js
const { install, printLogsToFile } = require('cypress-terminal-report');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      install(on, config);
      printLogsToFile(on, config);  // permet d’écrire dans un fichier
      return config;
    }
  }
};
````

* eg
````js
2025-08-21 19:10:15 [spec.cy.js] Running test: "Login works"
    cy.visit("http://localhost:3000/")
    cy.get("input[name=username]")
    cy.type("admin")
    cy.get("input[name=password]")
    cy.type("1234")
    cy.click("button[type=submit]")
    cy.log("User logged in successfully")   <-- ton cy.log apparait ici
````

* O/P
