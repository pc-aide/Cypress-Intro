# v1

---

## doc
* https://www.npmjs.com/package/cypress-terminal-report#optionsprintlogstoconsole

---

## install
````shell
npm i cypress-terminal-report
````

---

## support/e2e.js
````js
// Import cypress-terminal-report support avec options avancées
require('cypress-terminal-report/src/installLogsCollector')({
  // Collecter tous les types de logs supportés pour avoir toutes les couleurs
  collectTypes: [
    'cons:log',
    'cons:info', 
    'cons:warn',
    'cons:error',
    'cons:debug',
    'cy:log',
    'cy:xhr',
    'cy:fetch',
    'cy:request',
    'cy:intercept',
    'cy:command'
  ],
  // Ajouter des timestamps pour plus de détails
  commandTimings: 'timestamp',
  // Options XHR pour voir les requêtes réseau avec couleurs
  xhr: {
    printBody: true,
    printHeaderData: false,
    printRequestData: true
  }
});
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

## e2e/test.cy.js
````js
describe('test', () => {
    it('test login with cred', () => {
        cy.log('🚀 Starting the test - visiting saucedemo');
        cy.visit('https://www.saucedemo.com/v1/index.html');
        
        // username
        cy.log('📝 Entering username');
        cy.get('input[id="user-name"]')
          .should('be.visible')
          .then(() => {
            cy.log('✅ Username field is visible');
          });
        cy.get('input[id="user-name"]')
          .type('standard_user')
          .then(() => {
            cy.log('✅ Username entered successfully');
          });
        
        // password
        cy.log('🔐 Entering password');
        cy.get('input[id="password"]')
          .should('be.visible')
          .then(() => {
            cy.log('✅ Password field is visible');
          });
        cy.get('input[id="password"]')
          .type('test')  
          .then(() => {
            cy.log('⚠️ Password entered (incorrect for testing)');
          });
        
        // loggin btn
        cy.log('🖱️ Clicking login button');
        cy.get('input[id="login-button"]')
          .should('be.visible')
          .then(() => {
            cy.log('✅ Login button is visible');
          });
        cy.get('input[id="login-button"]')
          .click()
          .then(() => {
            cy.log('✅ Login button clicked');
          });

        // inventory page
        cy.url().should('include', 'inventory');

        // Ajouter quelques console.log depuis la page
        // cy.window().then((win) => {
        //     win.console.log('✅ Test message from browser console');
        //     win.console.warn('⚠️ Test warning from browser console');
        //     win.console.error('❌ Test error from browser console');
        // });
    });
});
````

---

## Test
````shell
npx cypress run --spec "cypress/e2e/test.cy.js" --browser edge --headed
````

### O/P
* cypress_test.html
<img src="https://i.imgur.com/w5Pyk5O.png">
