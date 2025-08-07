# v14

---

## features
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|-|[experimentalModifyObstructiveThirdPartyCode](https://docs.cypress.io/app/guides/cross-origin-testing#Modifying-Obstructive-Third-Party-Code)| the concept of modifying obstructive code, which is code that may interfere with Cypress being able to run your web application. The experimentalModifyObstructiveThirdPartyCode flag provides the same benefits of the modifyObstructiveCode flag, but additionally applies it to third-party `.js` and `.html` that is being either loaded or navigated to inside your application<br/><br/>* Adjusts the User Agent in Electron to appear more chrome-like. This option can be overridden with the userAgent config option<br/>* Removes Subresource Integrity (SRI) from modified scripts as they will not execute otherwise.<br/>* Updates the `Sec-Fetch-Dest` Metadata header from `iframe` to `document` in cases where requests come from the application under test.|cypress.config.js<br/>`const { defineConfig } = require("cypress");`<br/>` `<br/>`module.exports = defineConfig({`<br/>`  experimentalModifyObstructiveThirdPartyCode: true,`<br/>`  e2e: {`<br/>`    setupNodeEvents(on, config) {`<br/>`      // implement node event listeners here`<br/>`    },`<br/>`  },`<br/>`});`|<img src="https://i.imgur.com/ERQgZtv.png">|
