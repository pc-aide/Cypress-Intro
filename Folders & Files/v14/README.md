# v14

---

## features
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|-|[experimentalModifyObstructiveThirdPartyCode](https://docs.cypress.io/app/guides/cross-origin-testing#Modifying-Obstructive-Third-Party-Code)| the concept of modifying obstructive code, which is code that may interfere with Cypress being able to run your web application. The experimentalModifyObstructiveThirdPartyCode flag provides the same benefits of the modifyObstructiveCode flag, but additionally applies it to third-party `.js` and `.html` that is being either loaded or navigated to inside your application|cypress.config.js<br/>`const { defineConfig } = require("cypress");`<br/>` `<br/>`module.exports = defineConfig({`<br/>`  experimentalModifyObstructiveThirdPartyCode: true,`<br/>`  e2e: {`<br/>`    setupNodeEvents(on, config) {`<br/>`      // implement node event listeners here`<br/>`    },`<br/>`  },`<br/>`});`|<img src="https://i.imgur.com/ERQgZtv.png">|
