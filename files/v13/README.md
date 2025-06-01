# files

---

## List
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1|package.json|||
|2|cypress.config.js|<ins>`watchForFileChanges:false`</ins><br/>See what happens when you make any changes & save|`const { defineConfig } = require('cypress')`<br/>` `<br/>`module.exports = defineConfig({`<br/>`  e2e: {`<br/>`    baseUrl: 'http://localhost:3000',`<br/>`    specPattern: 'cypress/e2e/**/*.cy.js',`<br/>`    supportFile: 'cypress/support/e2e.js',`<br/>`    watchForFileChanges: false,`<br/>`    setupNodeEvents(on, config) {`<br/>`      // configure plugins here if needed`<br/>`      return config`<br/>`    }`<br/>`  }`<br/>`})`|
