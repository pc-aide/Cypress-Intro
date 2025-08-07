# v14

---

## Files
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|-|experimentalModifyObstructiveThirdPartyCode||cypress.config.js<br/>`const { defineConfig } = require("cypress");`<br/>` `<br/>`module.exports = defineConfig({`<br/>`  experimentalModifyObstructiveThirdPartyCode: true,`<br/>`  e2e: {`<br/>`    setupNodeEvents(on, config) {`<br/>`      // implement node event listeners here`<br/>`    },`<br/>`  },`<br/>`});`|<img src="https://i.imgur.com/ERQgZtv.png">|
